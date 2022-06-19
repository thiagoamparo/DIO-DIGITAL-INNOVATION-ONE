# Atividade: Funções

Para este projeto, será utilizado o conhecimento prévio em funções da linguagem Javascript.

## Objetivo

Desenvolver uma função que a partir de um array de alunos e um valor médio de aprovação determine os alunos aprovados.

## Requisitos

1. Criar uma função que receba um array de objetos e um número como `parâmetros`.

2. Cada `objeto` do array que a função receberá, devera representar um aluno e devera ser composto por `{nome, nota, turma}`.

3. O `número` que a função recebera representará a média final, isso é, a nota mínima que o aluno devera ter para ser aprovado.

3. A função devera `percorrer` todos os objetos do array e popular um `novo array` com os alunos que tiverem a nota `maior/igual` a média de aprovação.

4. Devera ser utilizado a técnica `Object Destructuring` para manipular as propriedades desejadas de cada aluno.

### Exemplos:

```
Entrada:[{name: 'Eduardo', mean: 4.98, class: '4D'},
         {name: 'David', mean: 8.04, class: '4C'},
         {name: 'Casio', mean: 6.43, class: '3E'},
         {name: 'Barbara', mean: 9.28, class: '2C'},
         {name: 'Ana', mean: 5.42, class: '3B'}], 6

Sáida: ['David', 'Casio', 'Barbara']
```

### Desafio:

Criar uma função que receba um array de nomes e gere aleatoriamente um array de objetos para representar cada um dos alunos. O objeto devera ser composto por `{nome, nota, turma}`.

```
Entrada: ['Ana','Barbara','Casio','David','Eduardo']

Sáida:[{name: 'Eduardo', mean: 4.98, class: '4D'},
       {name: 'David', mean: 8.04, class: '4C'},
       {name: 'Casio', mean: 6.43, class: '3E'},
       {name: 'Barbara', mean: 9.28, class: '2C'},
       {name: 'Ana', mean: 5.42, class: '3B'}]
```