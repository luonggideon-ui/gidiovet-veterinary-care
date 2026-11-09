# Gidiovet VPC
resource "aws_vpc" "gidiovet_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name    = "gidiovet-vpc"
    Project = "Gidiovet Veterinary Care"
  }
}
# Public Subnet
resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.gidiovet_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true

  tags = {
    Name    = "gidiovet-public-subnet"
    Project = "Gidiovet Veterinary Care"
  }
}
# Internet Gateway
resource "aws_internet_gateway" "gidiovet_igw" {
  vpc_id = aws_vpc.gidiovet_vpc.id

  tags = {
    Name    = "gidiovet-igw"
    Project = "Gidiovet Veterinary Care"
  }
}
# Public Route Table
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.gidiovet_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gidiovet_igw.id
  }

  tags = {
    Name    = "gidiovet-public-route-table"
    Project = "Gidiovet Veterinary Care"
  }
}

# Associate Public Subnet with Public Route Table
resource "aws_route_table_association" "public_subnet_association" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_route_table.id
}
# Security Group for Gidiovet Web Server
resource "aws_security_group" "gidiovet_sg" {
  name        = "gidiovet-web-sg"
  description = "Allow SSH, HTTP and HTTPS traffic"
  vpc_id      = aws_vpc.gidiovet_vpc.id

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["94.203.16.199/32"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name    = "gidiovet-web-sg"
    Project = "Gidiovet Veterinary Care"
  }
}
# Find the latest Amazon Linux 2023 AMI
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-2023.*-x86_64"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
} # EC2 SSH Key Pair
resource "aws_key_pair" "gidiovet_key" {
  key_name   = "gidiovet-key"
  public_key = file(pathexpand("~/.ssh/gidiovet-key.pub"))

  tags = {
    Name    = "gidiovet-key"
    Project = "Gidiovet Veterinary Care"
  }
}
# EC2 Instance for Gidiovet Web Server
resource "aws_instance" "gidiovet_server" {
  ami                         = data.aws_ami.amazon_linux.id
  instance_type               = "t3.micro"
  subnet_id                   = aws_subnet.public_subnet.id
  vpc_security_group_ids      = [aws_security_group.gidiovet_sg.id]
  key_name                    = aws_key_pair.gidiovet_key.key_name
  associate_public_ip_address = true

  tags = {
    Name    = "gidiovet-web-server"
    Project = "Gidiovet Veterinary Care"
  }
}
