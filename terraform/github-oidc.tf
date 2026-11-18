
# GitHub Actions OpenID Connect provider
resource "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"

  client_id_list = [
    "sts.amazonaws.com"
  ]

  tags = {
    Name    = "github-actions-oidc"
    Project = "Gidiovet Veterinary Care"
  }
}

# IAM role for GitHub Actions deployment
resource "aws_iam_role" "github_actions_deploy" {
  name = "gidiovet-github-actions-deploy-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
            "token.actions.githubusercontent.com:sub" = "repo:luonggideon-ui/gidiovet-veterinary-care:ref:refs/heads/main"
          }
        }
      }
    ]
  })

  tags = {
    Project = "Gidiovet Veterinary Care"
  }
}
