# Infraestrutura Como Código - (IaC)

Para este projeto, será utilizada uma máquina virtual Linux Server juntamente com o editor de texto Nano para criar o código responsável pela estrutura do servidor.

## Objetivo

Desenvolver um Script Bash para configurar uma estrutura básica no Linux Server, abrangendo a criação de usuários, diretórios e atribuição de permissões adequadas.

## Requisitos

1. Realize a preparação do ambiente para a execução do Shell. Incluindo a remoção dos seguintes itens configurados anteriormente na fase de testes da máquina virtual Linux Server:

    - Usuários
    - Grupos
    - Arquivos
    - Diretórios

2. Todo provisionamento deve ser realizado através de um arquivo do tipo Bash Script.

3. O proprietário de todos os diretórios criados será o usuário root.

4. Todos os usuários terão permissão total dentro do diretório `publico`.

5. Os usuários pertencentes a cada grupo terão permissão total dentro de seu respectivo diretório.

6. Os usuários não terão permissões de leitura, escrita e execução em diretórios de departamentos aos quais não pertencem.

## Estrutura

### Diretórios

    - /public
    - /adm
    - /ven
    - /sec

### Grupos

    - GRP_ADM
    - GRP_VEN
    - GRP_SEC

### Usuários

#### GRP_ADM

    - carlos
    - maria
    - joao

#### GRP_VEN

    - debora
    - sebastiana
    - roberto

#### GRP_SEC

    - josefina
    - amanda
    - rogerio