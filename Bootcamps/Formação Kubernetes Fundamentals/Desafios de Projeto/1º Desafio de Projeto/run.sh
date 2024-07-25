#!/bin/bash

echo "Configurando Aplicação em Ambiente Cluster..."

echo "Preparando Ambiente..."

echo "Atualizando Pacotes Do Servidor."

# sudo apt-get update
# sudo apt-get upgrade -y

echo "Instalando Aplicação Unzip."

sudo apt-get install unzip -y

echo "Instalando Aplicação Wget."

sudo apt-get install wget -y

# echo "Instalando Docker."

# curl -fsSL https://get.docker.com | sudo bash

# echo "Instalando Docker Compose."

# curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
# sudo chmod +x /usr/local/bin/docker-compose

# echo "Instalação Finalizada Com Sucesso."

echo "Montando Registro Local Docker."

docker run -d -p 5000:5000 --name registry registry:2

echo "Atualização Finalizada Com Sucesso."

echo "Baixando e Salvando Arquivos da Aplicação Web..."

cd /tmp
wget https://github.com/thiagoamparo/DIO-DIGITAL-INNOVATION-ONE/archive/refs/heads/main.zip

echo "Descompactando Aplicação Web"

unzip -o main.zip

echo "Montando Imagem de Containers..."

cd /tmp/"DIO-DIGITAL-INNOVATION-ONE-main"/"Bootcamps"/"Formação Kubernetes Fundamentals"/"Desafios de Projeto"/"1º Desafio de Projeto"

echo "Montando Imagem do Backend da Aplicação."

docker build -t tasks-backend:1.0 Back-End/.

docker tag tasks-backend:1.0 localhost:5000/tasks-backend:1.0
docker push localhost:5000/tasks-backend:1.0

echo "Montando Imagem do DataBase da Aplicação."

docker build -t tasks-database:1.0 DataBase/.

docker tag tasks-database:1.0 localhost:5000/tasks-database:1.0
docker push localhost:5000/tasks-database:1.0

echo "Limpando Arquivos Baixados."

cd /tmp
rm main.zip -f
rm DIO-DIGITAL-INNOVATION-ONE-main -r -d -f

echo "Configuração do Servidor Web Finalizada."