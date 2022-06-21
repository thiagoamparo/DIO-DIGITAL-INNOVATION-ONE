// Funcoes para uso do objeto aluno.

function calculateAge(age) {
    return `O curso de ${this.name} tem duração de ${age} anos, sendo completado com ${this.age + age} anos de idade.`;
}

function calculateMean(mean) {
    return `${this.name} tem uma média de ${this.mean.toFixed(2)}, e recebeu ${mean.toFixed(2)} pontos extras, ficando com ${(this.mean + mean).toFixed(2)}.`;
}

function changeClasses(newClass) {
    return `${this.name} atualmente está na turma ${this.class}, porém será remanejado para ${newClass}.`;
}

// Gera um numero inteiro pseudo-aleatorio.
const randint = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

// Gera um numero decimal pseudo-aleatorio.
const random = (max, min, round=2) => Number((Math.random() * (max - min + 1) + min).toFixed(round));

// Gera uma lista de estudantes pseudo-aleatoria.
function students(names) {

    if ((!names instanceof Array) || (!names.length)) { return []; }

    let students = [];

    while (names.length > 0) {

        let student = {
            name: names.pop(randint(0, names.length)),
            age: randint(18, 60),
            mean: random(3, 10),
            class: randint(1,5) + String.fromCharCode(randint(65, 70))
        };

        students.push(student);
    }

    return students;
}

// Realiza o uso dos metodos call e apply.
function main() {

    // Cria uma lista de estudantes.
    const STUDENTS = students(['Ana','Barbara','Casio']);

    console.log('Lista de Estudantes: \n');
    console.log(STUDENTS);

    // Utiliza o Método Apply.
    console.log('Usando o Método Apply: \n');

    for (let i = 0; i < STUDENTS.length; i++) {

        let age = randint(0, 10);
        let newMean = random(0, 2);
        let newClass = randint(1,5) + String.fromCharCode(randint(65, 70));

        let {name} = STUDENTS[i];

        console.log(name);
        console.log(calculateAge.apply(STUDENTS[i], [age]));
        console.log(calculateMean.apply(STUDENTS[i], [newMean]));
        console.log(changeClasses.apply(STUDENTS[i], [newClass]));
        console.log('');
    }

    // Utiliza o Método Call.
    console.log('Usando o Método Call: \n');

    for (let i = 0; i < STUDENTS.length; i++) {

        let age = randint(0, 5);
        let newMean = random(0, 2);
        let newClass = randint(1,5) + String.fromCharCode(randint(65, 70));

        let {name} = STUDENTS[i];

        console.log(name);
        console.log(calculateAge.call(STUDENTS[i], age));
        console.log(calculateMean.call(STUDENTS[i], newMean));
        console.log(changeClasses.call(STUDENTS[i], newClass));
        console.log('');
    }
}

main();