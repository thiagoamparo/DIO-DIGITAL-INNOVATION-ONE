#!/bin/bash

DOCKER_INFRASTRUCTURE_PATH=$1
DOCKER_STACK_NAME=$2
EXPECTED_NODES=$3
APP_OUTPUT_LOG_PATH=$4

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
cp -R * $DOCKER_INFRASTRUCTURE_PATH

echo "Limpando Arquivos Baixados."

cd /tmp
rm main.zip -f
rm DIO-DIGITAL-INNOVATION-ONE-main -r -d -f

echo "Aguardando Inicialização do Cluster:"

(while true; do

    NODES=$(docker node ls --format '{{.ID}} {{.Status}}' | grep 'Ready' | wc -l)
    
    echo "Aguardando Inicialização do Cluster:"

    if [ "$NODES" -eq "$EXPECTED_NODES" ]; then

        echo "Todos os $EXPECTED_NODES Nodes do Docker estão prontos."

        echo "Iniciando Aplicação Web."

        docker stack deploy --compose-file "${DOCKER_INFRASTRUCTURE_PATH}docker-compose.yml" "${DOCKER_STACK_NAME}"

        break
    
    else

        echo "Node(s) prontos: $NODES/$EXPECTED_NODES. Verificando novamente em 60 segundos..."

        sleep 60
    
    fi

done) > ${APP_OUTPUT_LOG_PATH} 2>&1 &

echo "Configuração do Servidor Web Finalizada."