# Docker Swarm: Executando um Cluster local com Vagrant

Para este projeto, serão utilizadas `múltiplas` máquinas virtuais `Linux Server` providas pelo `Hyper-V` da Microsoft. O Visual Studio Code `(VSCode)` será responsável pela implementação do arquivo `Vagrantfile`, que terá a função de automatizar o processo de virtualização das máquinas que formarão o `Cluster`, responsável por hospedar a `Aplicação Web`. Além disso, `Scripts Shell` serão implementados em cada máquina virtual para a configuração e automatização do ambiente virtual.

## Objetivo

Implementa um `Cluster` local usando `Vagrant` para suportar e provisionar um serviço web mantido por contêineres `Docker`. Com capacidade de prover e manter um ambiente consistente e escalável para implementar aplicações Docker localmente.

## Ambiente de Desenvolvimento

### Hyper-V

O Hyper-V é uma plataforma de virtualização da Microsoft para sistemas Windows.

- **Hipervisor do Windows:** O Hyper-V é integrado ao sistema operacional `Windows`, permitindo a execução de `múltiplas` máquinas virtuais em uma única máquina física.

- **Virtualização de Hardware:** Ele suporta `virtualização` de hardware, permitindo que cada `Máquina Virtual` execute sistemas operacionais distintos `simultaneamente`.

- **Isolamento e Segurança:** Cada máquina virtual é isolada das outras e do host físico, garantindo um ambiente seguro para testes e desenvolvimento.

- **Recursos Avançados:** Disponibilizando recursos como snapshots, clones e migração de máquinas virtuais em tempo real.

#### Instalação

- [Hyper-V](https://learn.microsoft.com/pt-br/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)

### Vagrant

O Vagrant é uma ferramenta de código aberto desenvolvida pela [HashiCorp](https://www.hashicorp.com/) que facilita a criação, configuração e gerenciamento de ambientes de desenvolvimento virtualizados de forma simples e portátil.

- **Automatização de Ambientes**: Com o `Vagrant`, pode-se definir as configurações de um ambiente de desenvolvimento em um único arquivo de configuração chamado `Vagrantfile`. Permitindo o compartilhamento facilitado das configurações do ambiente de desenvolvimento com a equipe, garantindo consistência e facilitando a configuração inicial das `Máquinas Vituais`.

- **Multi-Plataforma**: O Vagrant suporta diversas plataformas de virtualização, como `VirtualBox`, `VMware`, `Hyper-V`, entre outras. Permitindo utilizar o `Vagrant` em diferentes sistemas operacionais, como `Windows`, `macOS` e `Linux`.

- **Provisionamento**: O `Vagrant` permite automatizar a instalação e configuração de software nos ambientes de desenvolvimento. Suportando diferentes ferramentas de provisionamento, como `Shell Scripts`, `Puppet`, `Chef` e `Ansible`.

- **Reprodutibilidade**: O `Vagrant` garanti que todos os membros da equipe tenham ambientes de desenvolvimento consistentes, `independentemente` de suas máquinas locais. Aumentando a `reprodutibilidade` do ambiente e facilitando a `colaboração` em projetos.

- **Integração com Controle de Versão**: Os arquivos de configuração do `Vagrant` podem ser versionados juntamente com o código-fonte do `projeto`, permitindo o acompanhamento das alterações no ambiente de desenvolvimento ao longo do tempo e reversões para versões anteriores, se necessário.

#### Instalação

- [Vagrant](https://www.vagrantup.com/downloads)

#### Vagrant Reload Provisioner

O Vagrant Reload é um plugin `Vagrant 1.2+` que permite adicionar uma etapa de provisionamento `reload` utilizado para recarregar uma `Máquina Virtual` durante o provisionamento.

##### Instalação

```bash
    $ vagrant plugin install vagrant-reload
```
### Pré-Requisitos

- [Hyper-V](https://learn.microsoft.com/pt-br/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
- [Vagrant](https://www.vagrantup.com/downloads)
- [Vagrant Reload](https://github.com/aidanns/vagrant-reload/blob/master/README.md)

## Requisitos

1. Implementar um arquvio `Vagrantfile`.

2. Definir um cluster com 4 máquinas virtuais no `Vagrantfile`.

3. Definir 1 máquina virtual como `Master`.

4. Definir 3 máquinas virtuais como `Workers`.

5. Definir `IPs` fixos para cada máquina virtual.

6. Instalar o `Docker` e o `Docker-Compose` em cada máquina virtual.

7. Definir a máquina `Master` como nó gerenciador do Cluster.

## Estrutura do Projeto

```
Projeto
│
├───Vagrantfile
│
├───infraestrutura
│   └───docker-compose.yml
│
└───setup
    ├───app.sh
    ├───docker-install.sh
    ├───master.sh
    ├───network.sh
    ├───update.sh
    └───workers.sh
```

- **Vagrantfile**: O arquivo de configuração principal do Vagrant, onde são definidas as máquinas virtuais e suas respectivas configurações.

- **setup/**: Este diretório contém scripts auxiliares para configurar as máquinas virtuais individualmente. Contendo configurações específicas do sistema operacional `Linux Server`.

- **infraestrutura/**: Este diretório contém arquivos relacionados à infraestrutura do projeto. O arquivo `docker-compose.yml` é utilizado para definir os `serviços` Docker e seus `contêineres` associados.

## Estrutura do Cluster

### Serviços

- **www**: Este serviço é responsável por hospedar o ambiente web utilizando PHP e Apache.
    
    - **image**: webdevops/php-apache:alpine-php7

- **database**: Este serviço atua como o banco de dados principal do cluster, reponsavel por todas as operações realizadas no banco de dados.
    
    - **image**: mysql:5.7

### Nodes

#### **Masters**

Nó responsável pela gestão do `Cluster`, responsável pela administração de todos os outros nós.

- **Master**:
    - Serviços:
        - `database`

#### **Workers**

Os nós Workers são responsáveis pela execução dos contêineres Docker e pela provisão dos serviços em execução.

- **Alpha**:
    - Serviços:
        - `www`
        
- **Bravo**:
    - Serviços:
        - `www`

- **Charlie**:
    - Serviços:
        - `www`

## Principais Comandos do Vagrant

1. **vagrant up**

O comando `vagrant up` é usado para criar e iniciar as máquinas virtuais definidas no Vagrantfile. Se as VMs já existirem, este comando irá apenas iniciá-las.

```
vagrant up
```

**Este comando irá:**

- Ler o Vagrantfile para configurar as VMs.
- Baixar a box especificada, caso ainda não esteja disponível localmente.
- Criar e iniciar as VMs com base nas configurações definidas.

2. **vagrant halt**

O comando `vagrant halt` é utilizado para desligar as máquinas virtuais que estão em execução. Este comando é o equivalente a desligar fisicamente um computador.

```
vagrant halt
```

**Este comando irá:**

- Enviar um sinal de desligamento para as VMs em execução.
- Salvar o estado atual das VMs antes de desligá-las.

3. **vagrant destroy**

O comando `vagrant destroy` é usado para parar e excluir todas as máquinas virtuais gerenciadas pelo Vagrant. Isso remove todas as VMs e os dados associados a elas.

```
vagrant destroy
```

```
vagrant destroy -f
```

**Este comando irá:**

- Parar todas as VMs em execução.
- Remover todas as VMs e liberar os recursos associados.
- Pedir confirmação antes de destruir as VMs, a menos que a opção -f (force) seja usada.

4. **vagrant status**

O comando `vagrant status` exibe o status atual das máquinas virtuais gerenciadas pelo Vagrant. Ele mostra se as VMs estão em execução, paradas ou inexistentes.

```
vagrant status
```

**Este comando irá:**

- Listar todas as VMs definidas no Vagrantfile.
- Mostrar o estado atual de cada VM (running, poweroff, not created, etc.).

## Implementação

Passo a passo para configurar e iniciar o cluster local:

1. Realiza o dowload do repositório do `GitHub` para a máquina local.

```
git clone https://github.com/thiagoamparo/DIO-DIGITAL-INNOVATION-ONE.git
```

2. Navega até o repositório do projeto.

```
cd "/tmp/DIO-DIGITAL-INNOVATION-ONE-main/Bootcamps/Formação Docker Fundamentals/Desafios de Projeto/2º Desafio de Projeto"
```

3. Inicia o `Vagrant` para criar e configurar as `Máquinas Virtuais` do `Cluster`.

```
vagrant up
```

4. Verifica o status das `Máquinas Virtuais` para garantir que todas foram criadas e estão rodando corretamente.

```
vagrant status
```

5. Acessa o nó `Gerenciador` do `Cluster`.

```
vagrant ssh Master
```

### Observações

- Antes da implementação, verifique as faixas de `IPs` disponibilizada pelo provisionador `Hyper-V` utilizando `PowerShell` do `Windows`.

```
Get-NetIPAddress -InterfaceAlias 'vEthernet (Default Switch)'
```

- **Defina o `IP` fixo das máquinas virtuais dentro da faixa de `IPs` identificada, para garantir que não haverá conflitos de rede.**

- **O Gateway do `Hyper-V` será a porta de conexão com a `Máquina Local` e a `Internet`.**

## Referências

- [Documentação do Vagrant](https://developer.hashicorp.com/vagrant/docs)
- [Documentação do Hyper-V](https://learn.microsoft.com/pt-br/virtualization/hyper-v-on-windows/about/)