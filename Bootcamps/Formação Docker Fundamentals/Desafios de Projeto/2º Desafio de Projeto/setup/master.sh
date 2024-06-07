#!/bin/bash

HOST_IP=$1
TOKEN_PATH=$2
DOCKER_INFRASTRUCTURE_PATH=$3
VOLUMES=$4

echo "Configurando Node Master ($HOST_IP)."

echo "Iniciando Docker Swarm..."

sudo mkdir -p $DOCKER_INFRASTRUCTURE_PATH
sudo chown vagrant:vagrant $DOCKER_INFRASTRUCTURE_PATH

sudo docker swarm init --advertise-addr=$HOST_IP

echo "Gerando Docker Token De Nodes Workers..."

sudo mkdir -p "$(dirname "$TOKEN_PATH")"
sudo chown vagrant:vagrant "$(dirname "$TOKEN_PATH")"

sudo docker swarm join-token worker -q > $TOKEN_PATH

echo "Instalando Servidor NFS (Network File System)..."

sudo apt-get install nfs-server -y

echo "Exportando Caminhos De Volumes..."

IFS=',' read -r -a paths <<< "$VOLUMES"

for path in "${paths[@]}"; do

    sudo mkdir -p "$path"
    echo "$path *(rw,sync,subtree_check)" | sudo tee -a /etc/exports

done

echo "Exportando Docker Token De Nodes Workers..."

echo ""$(dirname "$TOKEN_PATH")" *(rw,sync,subtree_check)" | sudo tee -a /etc/exports

sudo exportfs -ar

echo "Reiniciando Servidor NFS (Network File System)..."

sudo systemctl restart nfs-server

echo "Configuração do Servidor Node Master ($HOST_IP) Finalizada."