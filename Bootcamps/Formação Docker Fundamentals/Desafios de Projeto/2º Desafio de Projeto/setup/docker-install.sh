#!/bin/bash

echo "Inicializando a Instalação do Docker."

echo "Instalando Docker..."

curl -fsSL https://get.docker.com | sudo bash

echo "Instalando Docker Compose..."

curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "Configurando Usuario (vagrant) Para Configuração do Docker..."

sudo usermod -aG docker vagrant

echo "Instalação Finalizada Com Sucesso."