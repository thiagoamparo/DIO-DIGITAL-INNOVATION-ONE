# Atividade: List

Para este projeto, será utilizado o conhecimento prévio em como e quando utilizar ArrayList e LinkedList.

## Objetivo

Utilizando listas, faça um programa que realize 5 perguntas para uma
pessoa sobre um crime.

1. "Telefonou para a vítima?"

2. "Esteve no local do crime?"

3. "Mora perto da vítima?"

4. "Devia para a vítima?"

5. "Já trabalhou com a vítima?"

## Requisitos

Classifique o resultado a partir das respostas:

    0 Positivos: INOCENTE.
    2 Positivos: SUSPEITO.
    3 ou 4 Positivos: CUMPLICE.
    5 Positivos: ASSASINO.

### Exemplo:

```
Entrada:

    Telefonou para a vítima?
    s
    Esteve no local do crime?
    s
    Mora perto da vítima?
    s
    Devia para a vítima?
    s
    Já trabalhou com a vítima?
    s
```

```
Saida:

    ASSASINO!
```