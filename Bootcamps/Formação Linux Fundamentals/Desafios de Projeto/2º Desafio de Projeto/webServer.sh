#!/bin/bash

echo "Iniciando Configurações do Servidor Web..."
echo "Atualizando Servidor..."

sudo apt-get update
sudo apt-get upgrade -y

echo "Instalando Aplicação Apache."

sudo apt-get install apache2 -y

echo "Instalando Aplicação Unzip."

sudo apt-get install unzip -y

echo "Instalando Aplicação Wget."

sudo apt-get install wget -y

echo "Baixando e Salvando Arquivos da Aplicação Web."

cd /tmp
wget https://github.com/T-Amparo/DIO-DIGITAL-INNOVATION-ONE/archive/refs/heads/main.zip

echo "Descompactando Aplicação Web e Copiando Para Servidor Apache."

unzip -o main.zip

cd DIO-DIGITAL-INNOVATION-ONE-main/"Bootcamps"/"Formação Linux Fundamentals"/"Aplicação Web"
cp -R * /var/www/html/

echo "Limpando Arquivos Baixados."

cd /tmp
rm main.zip -f
rm DIO-DIGITAL-INNOVATION-ONE-main -r -d -f

echo "Configuração do Servidor Web Finalizada."
