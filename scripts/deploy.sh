#!/usr/bin/env bash

set -Eeuo pipefail

IMAGE="${1:?Docker image argument is required}"
CONTAINER="gidiovet-web"
ROLLBACK="gidiovet-web-rollback"
PORT=80

health_check() {
    for attempt in $(seq 1 15); do
        if curl -fsS --max-time 3 \
            "http://127.0.0.1:${PORT}/" > /dev/null; then
            echo "Health check passed"
            return 0
        fi

        echo "Health check attempt $attempt failed"
        sleep 2
    done

    return 1
}

echo "Starting Gidiovet deployment"
echo "Target image: $IMAGE"

echo "Pulling Docker image..."
docker pull "$IMAGE"

echo "Checking current application..."
docker inspect "$CONTAINER" > /dev/null
health_check

if docker container inspect "$ROLLBACK" > /dev/null 2>&1; then
    echo "Removing previous rollback container..."
    docker rm "$ROLLBACK"
fi

echo "Preserving current container..."
docker rename "$CONTAINER" "$ROLLBACK"

rollback() {
    trap - ERR
    set +e

    echo "Deployment failed. Starting rollback..."

    if docker container inspect "$CONTAINER" > /dev/null 2>&1; then
        docker rm -f "$CONTAINER" || exit 1
    fi

    docker rename "$ROLLBACK" "$CONTAINER" || exit 1
    docker start "$CONTAINER" || exit 1

    if health_check; then
        echo "Rollback successful"
    else
        echo "CRITICAL: Rollback health check failed"
    fi

    exit 1
}

trap rollback ERR

echo "Stopping previous container..."
docker stop "$ROLLBACK"

echo "Starting new container..."
docker run -d \
    --name "$CONTAINER" \
    --restart unless-stopped \
    -p "${PORT}:80" \
    "$IMAGE"

echo "Checking new application..."

if ! health_check; then
    rollback
fi

trap - ERR

echo "Deployment completed successfully"
docker ps --filter "name=$CONTAINER"

echo "Previous container retained for rollback"
