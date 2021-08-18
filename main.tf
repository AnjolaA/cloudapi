provider "azurerm" {
    version = "2.5.0"
    features {}
}

resource "azurern_resource_group" "tf_test" {
    name = "tfmainrg"
    location = "United Kingdom"
}

