#!/bin/bash

DOCKER_INFRASTRUCTURE_PATH=$1
DOCKER_STACK_NAME=$2

echo "Configurando Aplicação Web."

echo "Baixando e Salvando Arquivos da Aplicação Web..."

cd /tmp
wget https://github.com/thiagoamparo/DIO-DIGITAL-INNOVATION-ONE/archive/refs/heads/main.zip

echo "Descompactando Aplicação Web"

unzip -o main.zip

echo "Movendo Arquivos Da Aplicação Web para Volume."

cd /tmp/"DIO-DIGITAL-INNOVATION-ONE-main"/"Bootcamps"/"Formação Docker Fundamentals"/"Aplicação Web"/"app"
cp -R * /var/lib/docker/volumes/tasks_www_data/_data

echo "Copiando Estrutura Da Aplicação Web para Host."

cd /tmp/"DIO-DIGITAL-INNOVATION-ONE-main"/"Bootcamps"/"Formação Docker Fundamentals"/"Aplicação Web"/"infraestrutura"/"Conjunto"
cp -R * "$(dirname "$DOCKER_INFRASTRUCTURE_PATH")"

echo "Limpando Arquivos Baixados."

cd /tmp
rm main.zip -f
rm DIO-DIGITAL-INNOVATION-ONE-main -r -d -f

echo "Iniciando Aplicação Web."

docker stack deploy --compose-file "$(dirname "$DOCKER_INFRASTRUCTURE_PATH")"/docker-compose.yml $DOCKER_STACK_NAME

echo "Configuração do Servidor Web Finalizada."