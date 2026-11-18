
# Restricted SSM deployment permissions for GitHub Actions
resource "aws_iam_role_policy" "github_actions_ssm_deploy" {
  name = "gidiovet-github-ssm-deploy-policy"
  role = aws_iam_role.github_actions_deploy.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "SendDeploymentCommand"
        Effect = "Allow"
        Action = [
          "ssm:SendCommand"
        ]
        Resource = [
          "arn:aws:ssm:us-east-1::document/AWS-RunShellScript",
          aws_instance.gidiovet_server.arn
        ]
      },
      {
        Sid    = "CheckDeploymentStatus"
        Effect = "Allow"
        Action = [
          "ssm:GetCommandInvocation",
          "ssm:ListCommands",
          "ssm:DescribeInstanceInformation"

        ]
        Resource = "*"
      }
    ]
  })
}
