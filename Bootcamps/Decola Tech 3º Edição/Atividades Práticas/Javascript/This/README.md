# Atividade: Funções

Para este projeto, será utilizado o conhecimento prévio em funções da linguagem Javascript.

## Objetivo

Dadas as seguintes funções:

```js
function calculateAge(age) {
    return `O curso de ${this.name} tem duração de ${age} anos, sendo completado com ${this.age + age} anos de idade.`;
}
```

```js
function calculateMean(mean) {
    return `${this.name} tem uma média de ${this.mean.toFixed(2)}, e recebeu ${mean.toFixed(2)} pontos extras, ficando com ${(this.mean + mean).toFixed(2)}`;
}
```

```js
function changeClasses(newClass) {
    return `${this.name} atualmente está na turma ${this.class}, porém será remanejado para ${newClass}`;
}
```

Utilize o valor this de cada objeto que representa um aluno para interagir com elas.

## Requisitos

1. Crie um array de `objetos`, cada objeto devera representar um aluno e devera ser composto por `{nome, idade, nota, turma}`.

2. Utilize as funções `apply` e `call` para interagir com as funções, passando cada elemento do array de objetos através do `this`.

### Exemplos:

#### Método Apply:
```
Entrada:[{ name: 'Casio', age: 49, mean: 6.91, class: '3D' },
         { name: 'Barbara', age: 42, mean: 7.79, class: '4B' },
         { name: 'Ana', age: 40, mean: 5.99, class: '3B' }]

Sáida:

    Usando o Método Apply:

    Casio
    O curso de Casio tem duração de 4 anos, sendo completado com 53 anos de idade.
    Casio tem uma média de 6.91, e recebeu 1.44 pontos extras, ficando com 8.35.
    Casio atualmente está na turma 3D, porém será remanejado para 2D.

    Barbara
    O curso de Barbara tem duração de 4 anos, sendo completado com 46 anos de idade.
    Barbara tem uma média de 7.79, e recebeu 1.09 pontos extras, ficando com 8.88.
    Barbara atualmente está na turma 4B, porém será remanejado para 2B.

    Ana
    O curso de Ana tem duração de 8 anos, sendo completado com 48 anos de idade.
    Ana tem uma média de 5.99, e recebeu 1.82 pontos extras, ficando com 7.81.
    Ana atualmente está na turma 3B, porém será remanejado para 2C.
```

#### Método Call:

```
Entrada:[{ name: 'Casio', age: 49, mean: 6.91, class: '3D' },
         { name: 'Barbara', age: 42, mean: 7.79, class: '4B' },
         { name: 'Ana', age: 40, mean: 5.99, class: '3B' }]

Sáida:

    Usando o Método Call:

    Casio
    O curso de Casio tem duração de 1 anos, sendo completado com 50 anos de idade.
    Casio tem uma média de 6.91, e recebeu 1.35 pontos extras, ficando com 8.26.
    Casio atualmente está na turma 3D, porém será remanejado para 4C.

    Barbara
    O curso de Barbara tem duração de 3 anos, sendo completado com 45 anos de idade.
    Barbara tem uma média de 7.79, e recebeu 1.85 pontos extras, ficando com 9.64.
    Barbara atualmente está na turma 4B, porém será remanejado para 2E.

    Ana
    O curso de Ana tem duração de 4 anos, sendo completado com 44 anos de idade.
    Ana tem uma média de 5.99, e recebeu 2.00 pontos extras, ficando com 7.99.
    Ana atualmente está na turma 3B, porém será remanejado para 2B.
```

### Desafio:

Criar uma função que receba um array de nomes e gere aleatoriamente um array de objetos para representar cada um dos alunos. O objeto devera ser composto por `{nome, idade, nota, turma}`.

```
Entrada: ['Ana','Barbara','Casio']

Sáida:

    Lista de Estudantes:

    [
        { name: 'Casio', age: 49, mean: 6.91, class: '3D' },
        { name: 'Barbara', age: 42, mean: 7.79, class: '4B' },
        { name: 'Ana', age: 40, mean: 5.99, class: '3B' }
    ]
```