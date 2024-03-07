#!/bin/bash

# Set environment variables
APP_NAME="MatildaTest"
CONTAINER_REGISTRY_LOGIN_SERVER=$(az acr show -n $APP_NAME --query loginServer -o tsv)
CONTAINER_REGISTRY_USERNAME=$(az acr credential show -n $APP_NAME --query username -o tsv)
CONTAINER_REGISTRY_PASSWORD=$(az acr credential show -n $APP_NAME --query passwords[0].value -o tsv)
KUBE_CONFIG=$(cat ~/.kube/config | base64 -w 0)

# Echo variables for verification
echo "APP_NAME: $APP_NAME"
echo "CONTAINER_REGISTRY_LOGIN_SERVER: $CONTAINER_REGISTRY_LOGIN_SERVER"
echo "CONTAINER_REGISTRY_USERNAME: $CONTAINER_REGISTRY_USERNAME"
echo "CONTAINER_REGISTRY_PASSWORD: $CONTAINER_REGISTRY_PASSWORD"
echo "KUBE_CONFIG: $KUBE_CONFIG"
