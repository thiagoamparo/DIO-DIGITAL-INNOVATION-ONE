# Automação do Docker Compose

Este `Bash Script` foi desenvolvido para simplificar o processo de execução do `container` responsavel por hospedar a `Aplicação Web`.

## Funcionalidades

- **Cria o Repositorio para o Docker Compose:** Cria automaticamente o repositorio que armazenará o arquivo `docker-compose.yml`.

- **Baixa o Arquivo Docker Compose:** Realiza o dowload e a execução automatica do arquivo `docker-compose.yml` com as configurações necessárias para o servidor Apache (HTTPD).

- **Baixa a Aplicação Web:** Realiza o dowload automatico dos arquivos da `Aplicação Web`.

- **Transfere a Aplicação Web para o Container:** Realiza a transferencia da `Aplicação Web` para o volume referente ao `container`.

- **Limpa os Arquivos Baixados:** Realiza a limpeza no repositorio `/tmp` de todos os arquivos baixados.

## Requisitos

- Linux Server.
- Docker.
- Docker Compose.
