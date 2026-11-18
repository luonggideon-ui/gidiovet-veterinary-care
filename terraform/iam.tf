
# IAM role allowing EC2 to use AWS Systems Manager
resource "aws_iam_role" "gidiovet_ssm_role" {
  name = "gidiovet-ec2-ssm-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = {
    Project = "Gidiovet Veterinary Care"
  }
}

# Attach AWS Systems Manager permissions
resource "aws_iam_role_policy_attachment" "gidiovet_ssm_policy" {
  role       = aws_iam_role.gidiovet_ssm_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

# Create an instance profile for the EC2 role
resource "aws_iam_instance_profile" "gidiovet_ssm_profile" {
  name = "gidiovet-ec2-ssm-profile"
  role = aws_iam_role.gidiovet_ssm_role.name
}
