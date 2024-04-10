#!/bin/bash

echo "Executando Política do Servidor..."

echo "Criando Grupos de Usuários..."

echo "Criando Grupo de Usuários do Administrativo."

groupadd GRP_ADM

echo "Criando Grupo de Usuários de Vendas."

groupadd GRP_VEN

echo "Criando Grupo de Usuários do Secretariado."

groupadd GRP_SEC

echo "Grupos de Usuários Criados com Sucesso!"

echo "Criando Diretórios Padrões..."

echo "Criando Diretório Público de Usuários."

mkdir /public
chmod 777 /public

echo "Criando Diretório dos Usuários do Administrativo."

mkdir /adm
chown root:GRP_ADM /adm
chmod 770 /adm

echo "Criando Diretório dos Usuários de Vendas."

mkdir /ven
chown root:GRP_VEN /ven
chmod 770 /ven

echo "Criando Diretório dos Usuários do Secretariado"

mkdir /sec
chown root:GRP_SEC /sec
chmod 770 /sec

echo "Diretórios Padrões Criados com Sucesso!"

echo "Criando Usuários do Servidor..."
echo "Criando Usuários do Administrativo..."

echo "Criando Usuário Carlos."

useradd carlos -c "Carlos" -G GRP_ADM -s /bin/bash -m -p $(openssl passwd Default123!)
passwd carlos -e

echo "Criando Usuário Maria."

useradd maria -c "Maria" -G GRP_ADM -s /bin/bash -m -p $(openssl passwd Default123!)
passwd maria -e

echo "Criando Usuário João."

useradd joao -c "João" -G GRP_ADM -s /bin/bash -m -p $(openssl passwd Default123!)
passwd joao -e

echo "Usuários Administrativos Criados com Sucesso!"

echo "Criando Usuários de Vendas..."

echo "Criando Usuário Debora."

useradd debora -c "Debora" -G GRP_VEN -s /bin/bash -m -p $(openssl passwd Default123!)
passwd debora -e

echo "Criando Usuário Sebastiana."

useradd sebastiana -c "Sebastiana" -G GRP_VEN -s /bin/bash -m -p $(openssl passwd Default123!)
passwd sebastiana -e

echo "Criando Usuário Roberto."

useradd roberto -c "Roberto" -G GRP_VEN -s /bin/bash -m -p $(openssl passwd Default123!)
passwd roberto -e

echo "Usuários de Vendas Criados com Sucesso!"

echo "Criando Usuários do Secretariado..."

echo "Criando Usuário Josefina."

useradd josefina -c "Josefina" -G GRP_SEC -s /bin/bash -m -p $(openssl passwd Default123!)
passwd josefina -e

echo "Criando Usuário Amanda."

useradd amanda -c "Amanda" -G GRP_SEC -s /bin/bash -m -p $(openssl passwd Default123!)
passwd amanda -e

echo "Criando Usuário Rogerio."

useradd rogerio -c "Rogerio" -G GRP_SEC -s /bin/bash -m -p $(openssl passwd Default123!)
passwd rogerio -e

echo "Usuários do Secretariado Criados com Sucesso!"

echo "Usuários Criados com Sucesso!"

echo "Poíitica do Servidor Aplicada com Sucesso!"
