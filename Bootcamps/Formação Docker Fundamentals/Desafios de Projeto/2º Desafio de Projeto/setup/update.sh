#!/bin/bash

echo "Atualizando Pacotes Do Servidor."

sudo apt-get update
sudo apt-get upgrade -y

echo "Instalando Aplicação Unzip."

sudo apt-get install unzip -y

echo "Instalando Aplicação Wget."

sudo apt-get install wget -y

echo "Atualização Finalizada Com Sucesso."