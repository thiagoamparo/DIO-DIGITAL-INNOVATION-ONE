// Coleta o elemento 'createTasks' da pagina HTML.
const CREATETASKS = document.getElementById('createTasks');

// Coleta o elemento 'createdTasks' da pagina HTML.
const CREATEDTASKS = document.getElementById('createdTasks');

// Coleta o elemento 'notice' da pagina HTML.
const NOTICE = document.getElementById('notice');

// Lista de objetos para armazenar as tarefas criadas.
const TASKS = [];

// Determina o numero maximo de tarefas que podem ser criadas.
const TASK_LIMIT = 24;

// Determina o tempo que as mensagens de aviso permaneceram na tela.
const TIME = 3000;

// Adiciona um evento 'click' ao botao de adicionar tarefa da pagina HTML.
document.getElementById('add').addEventListener('click', createTask);

// Cria tarefas novas.
function createTask() {

    // Coleta o elemento 'nameTask' da pagina HTML.
    let name = document.getElementById('nameTask');

    // Verifica se a tarefa criada é valida.
    if (validateTask(name.value)) {

        // Coleta o elemento 'createdTasks' da pagina HTML.
        let createdTask = document.getElementById('createdTasks');

        // Cria o espaço para uma tarefa.
        let task = taskSpace();

        // Insere o 'checkbox' no elemento HTML criado.
        task.appendChild(checkbox());

        // Insere o 'nameTask' no elemento HTML criado.
        task.appendChild(text(name.value));

        // Insere o 'button' no elemento HTML criado.
        task.appendChild(button(task));

        // Insere a tarefa criada no elemento HTML 'createdTasks'.
        createdTask.appendChild(task);
        
        // Adiciona a tarefa criada a lista de objetos.
        TASKS.push({'name' : name.value, 'task' : task});

        // Limpa o campo digitado.
        name.value = '';
    }
}

// Verifica se a tarefa é valida para ser criada.
function validateTask(nameTask) {

    // Verifica se a quantidade de tarefas criadas esta dentro do limite estabelecido.
    if (TASKS.length >= TASK_LIMIT) {

        // Caso nao esteje emite um aviso.
        invalidTask('Número Máximo de Tarefas Atingido!');
        
        // Retorna false.
        return false;

    // Verifica se o nome da tarefa é vazio.
    } else if (nameTask === '') {

        // Caso seje emite um aviso.
        invalidTask('Descreva a Tarefa!');
        
        // Retorna false.
        return false;

    // Verifica se a tarefa ja existe.
    } else if (TASKS.find(task => task.name === nameTask)) {

        // Caso exista emite um aviso.
        repeatedTask('Essa Tarefa Já Existe!', nameTask);
        
        // Retorna false.
        return false;    
    }

    // Caso seje possivel criar a tarefa retorna true.
    return true;
}

// Cria e retorna um botao.
function button(task) {

    // Cria um elemento HTML do tipo 'button'.
    let button = document.createElement('button');

    // Insere um caractere para representar o botao de fechamento.
    button.textContent = '✖';

    // Adiciona um evento 'click' ao botao de deletar tarefa.
    button.addEventListener('click', function(event){
        
        // Remove a tarefa do elemento 'createdTasks'.
        CREATEDTASKS.removeChild(task);

        // Remove a tarefa da lista de tarefas.
        TASKS.pop(task);
    });

    // Retorna o botao criado.
    return button;
}

// Cria e retorna um checkbox.
function checkbox() {

    // Cria um elemento HTML do tipo 'input'.
    let checkbox = document.createElement('input');

    // Configura o tipo do input para um 'checkbox'.
    checkbox.type = 'checkbox';

    // Retorna o checkbox criado.
    return checkbox;
}

// Cria e retorna um texto.
function text(mensage) {

    // Cria um elemento HTML do tipo 'span'.
    let text = document.createElement('span');

    // Insere um texto ao elemento HTML criado.
    text.innerText = mensage;

    // Retorna o texto criado.
    return text;
}

// Cria e retorna o espaço para uma tarefa.
function taskSpace() {

    // Cria um elemento HTML do tipo 'div'.
    let task = document.createElement('div');

    // Inseri-se a classe 'task' ao elemento HTML criado.
    task.className = 'task';

    // Retorna a tarefa criada.
    return task;
}

// Realiza as devidas acoes quando uma tarefa é invalida.
function invalidTask(mensage) {

    // Inseri-se a classe 'invalid' ao elemento HTML coletado.
    CREATETASKS.className = 'invalid';

    // Insere o texto informado.
    NOTICE.innerText = mensage;

    // Define a cor do texto.
    NOTICE.style.color = '#d43f3a';
    
    // Remove as alteracoes realizadas pela funcao.
    clear();
}

// Desfaz as alteracoes feitas no 'cleateTask' e nas tarefas.
function clear(task) {

    // Espera alguns segudo ate executar a funcao.
    setTimeout(function(){

        // Remove a cor de aviso do 'cleateTask'.
        CREATETASKS.className = '';

        // Remove o texto de aviso do 'notice'.
        NOTICE.innerText = '';

        // Remove a cor do texto de aviso.
        NOTICE.style.color = '';

        // Remove a cor de aviso da tarefa, caso ela seje passada.
        if (task) { task.className = 'task'; };

    }, TIME);
}

// Realiza as devidas acoes quando uma tarefa é repetida.
function repeatedTask(mensage, nameTask) {

    // Pesquisa a tarefa pelo nome e armazena na variavel.
    let task = findTask(nameTask)['task'];

    // Inseri-se a classe 'replicated' ao elemento HTML coletado.
    task.className = 'task replicated';

    // Inseri-se a classe 'replicated' ao elemento HTML coletado.
    CREATETASKS.className = 'replicated';

    // Insere o texto informado.
    NOTICE.innerText = mensage;

    // Define a cor do texto.
    NOTICE.style.color = '#4cae4c';

    // Remove as alteracoes realizadas pela funcao.
    clear(task);
}

// Realiza uma busca na lista de tarefas pelo nome da tarefa.
function findTask(name) {

    // Retorna a tarefa encontrada ou 'undefined' caso nao encontre.
    return (TASKS.filter(task => task.name === name))[0];
}