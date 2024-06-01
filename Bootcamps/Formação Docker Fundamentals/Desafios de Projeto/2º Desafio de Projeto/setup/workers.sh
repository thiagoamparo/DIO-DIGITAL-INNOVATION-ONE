#!/bin/bash

MASTER_IP=$1
HOST_IP=$2
VOLUMES=$3
TOKEN_PATH=$4
DOCKER_PORT=$5

echo "Configurando Node Worker ($HOST_IP)."

echo "Instalando NFS (Network File System) Client..."

sudo apt-get install nfs-common -y

echo "Montando Caminhos De Volumes..."

IFS=',' read -r -a paths <<< "$VOLUMES"

for path in "${paths[@]}"; do

    sudo mkdir -p "$path"
    sudo mount -t nfs "$MASTER_IP:$path" "$path"

done

echo "Montando Docker Token De Nodes Workers..."

sudo mkdir -p "$(dirname "$TOKEN_PATH")"

sudo mount -t nfs "$MASTER_IP:"$(dirname "$TOKEN_PATH")"" "$(dirname "$TOKEN_PATH")"

echo "Iniciando Docker Swarm..."

docker swarm join --token $(cat "$TOKEN_PATH") $MASTER_IP:$DOCKER_PORT

echo "Reiniciando NFS (Network File System) Client..."

sudo systemctl restart nfs-common

echo "Configuração do Servidor Node Worker ($HOST_IP) Finalizada."