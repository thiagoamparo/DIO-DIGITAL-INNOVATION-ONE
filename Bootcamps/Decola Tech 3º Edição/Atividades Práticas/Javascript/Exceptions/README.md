# Atividade: Tratamento de Erros

Para este projeto, será utilizado o conhecimento prévio em tratamento e manipulação de erros da linguagem Javascript.

## Objetivo

Desenvolver uma função que realize o tratamento de erros ao detectar um erro no decorrer de sua execução ou ao atingir uma determinada condição.

## Requisitos

1. Criar uma função que receba um array e um número como `parâmetros`.

2. A função devera lançar um erro do tipo `ReferenceError` se os parâmetros não forem informados e uma mensagem personalizada devera ser apresentada.

3. A função devera lançar um erro do tipo `TypeError` se o array não for do tipo `object` e uma mensagem personalizada devera ser apresentada.

4. A função devera lançar um erro do tipo `TypeError` se o número não for do tipo `number` e uma mensagem personalizada devera ser apresentada.

5. A função devera lançar um erro do tipo `RangeError` se o tamanho do array for diferente do número informado e uma mensagem personalizada devera ser apresentada.

6. Faça uso do `try/catch` para realizar o tratamento do erro quando o mesmo for gerado.

7. Utilize o operador `instanceof` para filtrar e separar cada erro pelo seu tipo específico na chamada do `catch`.

8. A função devera `retornar` o mesmo array informado caso nenhum erro seja lançado.

### Exemplos:

```
Entrada: [1, 2, 3]

Sáida: Um erro do tipo ReferenceError foi gerado: O parâmetro informado é inválido!
```

```
Entrada: 0, 0

Sáida: Um erro do tipo TypeError foi gerado: É esperado um objeto do tipo Array!
```

```
Entrada: [], []

Sáida: Um erro do tipo TypeError foi gerado: É esperado um objeto do tipo Number!
```

```
Entrada: [], 1

Sáida: Um erro do tipo RangeError foi gerado: Tamanho do array inválido!
```