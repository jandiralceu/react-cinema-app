provider "aws" {
  region = "sa-east-1"
}

terraform {
  backend "s3" {
    bucket  = "cinq-app-cinema-tf-state"
    key     = "app-cinema.tfstate"
    encrypt = true
    region  = "sa-east-1"
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  commom_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Jandir A. Cutabiala"
  }
}
