
terraform {
  required_providers {
    azurerm  = {
      source  = "hashicorp/azurerm"
      version = "=2.5.0"
    }
  }
}


provider "azurerm" {
    features {}
}

resource "azurerm_resource_group" "tf_test" {
    name = "tfmainrg"
    location = "ukwest"
}

resource "azurerm_container_group" "tfcg_test" {
  name                      = "cloudapi"
  location                  = azurerm_resource_group.tf_test.location
  resource_group_name       = azurerm_resource_group.tf_test.name

  ip_address_type           = "public"
  dns_name_label            = "binarythislewa"
  os_type                   = "Linux"

  container {
    name = "cloudapi"
        image = "anjola/node-web-app" 
        cpu = "1"
        memory = "1"

        ports {
          port = 80
          protocol = "TCP"
        }
  }
}