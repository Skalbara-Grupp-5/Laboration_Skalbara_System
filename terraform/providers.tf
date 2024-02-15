terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.90.0"
    }
  }

  required_version = "= 1.7.3"
}

provider "azurerm" {
  features {}
}