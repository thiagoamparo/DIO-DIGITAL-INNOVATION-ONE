// Cria uma lista de estudantes.
const STUDENTS = students(['Ana','Barbara','Casio','David','Eduardo']);

// Gera uma lista de estudantes pseudo-aleatoria.
function students(names) {

    if ((!names instanceof Array) || (!names.length)) { return []; }

    // Gera um numero inteiro pseudo-aleatorio.
    const randint = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Gera um numero decimal pseudo-aleatorio.
    const random = (max, min, round=2) => Number((Math.random() * (max - min + 1) + min).toFixed(round));

    let students = [];

    while (names.length > 0) {

        let student = {
            name: names.pop(randint(0, names.length)),
            mean: random(3, 10),
            class: randint(1,5) + String.fromCharCode(randint(65, 70))
        };

        students.push(student);
    }

    return students;
}

// Verifica e retorna uma lista de estudantes aprovados.
function approvals(students, min=6) {

    let approveds = [];

    for (std of students) {

        let {mean} = std; // Object Destructuring.

        if (mean >= min) {

            approveds.push(std.name);
        }
    }

    return approveds;
}