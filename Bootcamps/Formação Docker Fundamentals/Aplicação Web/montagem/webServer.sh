#!/bin/bash

echo "Iniciando Configurações do Servidor Web..."

echo "Preparando Ambiente Para Execução de Container..."

echo "Parando Containers Em Execução."

docker rm -f Web_Aplication DataBase_Aplication

echo "Limpando Volumes Existentes."

docker volume rm project_www_data project_database_data

echo "Baixando e Salvando Arquivos da Aplicação Web."

cd /tmp
wget https://github.com/thiagoamparo/DIO-DIGITAL-INNOVATION-ONE/archive/refs/heads/main.zip

echo "Descompactando Aplicação Web"

unzip -o main.zip

echo "Criando Repositorio Para Container."

mkdir /containers
mkdir /containers/tasks

echo "Movendo Arquivos De Container Para Repositorio De Containers."

cd /tmp/"DIO-DIGITAL-INNOVATION-ONE-main"/"Bootcamps"/"Formação Docker Fundamentals"/"Aplicação Web"/"infraestrutura"/"Hospedeiro"
cp docker-compose.yml /containers/tasks

echo "Inicializando Container."

cd /containers/tasks
docker-compose up -d

echo "Movendo Arquivos Da Aplicação Web para Container."

cd /tmp/"DIO-DIGITAL-INNOVATION-ONE-main"/"Bootcamps"/"Formação Docker Fundamentals"/"Aplicação Web"/"app"
cp -R * /var/lib/docker/volumes/tasks_www_data/_data

echo "Limpando Arquivos Baixados."

cd /tmp
rm main.zip -f
rm DIO-DIGITAL-INNOVATION-ONE-main -r -d -f

echo "Configuração do Servidor Web Finalizada."