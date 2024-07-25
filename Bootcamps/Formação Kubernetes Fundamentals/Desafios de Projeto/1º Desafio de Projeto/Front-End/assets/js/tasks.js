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

// Determina o caminho das requisicoes solicitadas ao servidor backend.
const SERVER = "http://172.28.190.197:32523/connection.php"

// Adiciona um evento 'click' ao botao de adicionar tarefa da pagina HTML.
document.getElementById('add').addEventListener('click', createTask);

// Adiciona tarefas novas ao banco de dados.
function addTask(id, name, control, task) {

    // Cria um objeto do tipo FormData para enviar os dados.
    var formData = new FormData();

    //Define os dados do objeto FormData.
    formData.append('action', 'add');
    formData.append('taskID', id);
    formData.append('taskName', name);
    formData.append('taskControl', control);

    // Cria um objeto XMLHttpRequest para fazer a requisição AJAX.
    var request = new XMLHttpRequest();

    // Define o método e o URL da requisição.
    request.open("POST", SERVER, true);

    // Analisa o status da requisição.
    request.onload = function() {

        // Verifica se a requisição foi bem-sucedida.
        if (request.status >= 200 && request.status < 400) {

            // A requisição foi bem-sucedida.

            // Adiciona a tarefa criada a lista de objetos.
            TASKS.push({'id' : TASKS.length, 'name' : name.value, 'control' : control.checked, 'task' : task});

            // Exibe a resposta da requisição no console.
            console.log(request.responseText); 
        
        // Verifica se a requisição não foi bem-sucedida.
        } else {
            
            // A requisição não foi bem-sucedida.
            
            console.error("Erro ao adicionar tarefa: " + request.status);
        }
    };

    // Verifica se houve erros na conexão.
    request.onerror = function() {

        // Erro na conexão.

        // Exibe o erro da conexão no console.
        console.error("Erro de conexão ao adicionar tarefa!");
    };

    // Envia os dados da nova tarefa como parâmetro da requisição.
    request.send(formData);
}

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

        // Cria o 'checkbox' para uma tarefa.
        let control = checkbox(TASKS.length)

        // Insere o 'checkbox' no elemento HTML criado.
        task.appendChild(control);

        // Insere o 'nameTask' no elemento HTML criado.
        task.appendChild(text(name.value));

        // Insere o 'button' no elemento HTML criado.
        task.appendChild(button(task));

        // Insere a tarefa criada no elemento HTML 'createdTasks'.
        createdTask.appendChild(task);
        
        // Adiciona a tarefa criada ao banco de dados.
        addTask(TASKS.length, name.value, Number(control.checked), task);

        // Limpa o campo digitado.
        name.value = '';
    }
}

// Cria tarefas novas.
function insertTask(id, name, value) {

    // Verifica se a tarefa criada é valida.
    if (validateTask(name)) {

        // Coleta o elemento 'createdTasks' da pagina HTML.
        let createdTask = document.getElementById('createdTasks');

        // Cria o espaço para uma tarefa.
        let task = taskSpace();

        // Cria o 'checkbox' para uma tarefa.
        let control = checkbox(id)

        // Insere o 'checkbox' no elemento HTML criado.
        task.appendChild(control);

        // Insere o 'nameTask' no elemento HTML criado.
        task.appendChild(text(name));

        // Insere o 'button' no elemento HTML criado.
        task.appendChild(button(task));

        // Insere a tarefa criada no elemento HTML 'createdTasks'.
        createdTask.appendChild(task);
        
        // Adiciona a tarefa criada a lista de objetos.
        TASKS.push({'id' : id, 'name' : name, 'control' : value, 'task' : task});

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

        // Remove a tarefa criada.
        removeTask(TASKS.length, task);

    });

    // Retorna o botao criado.
    return button;
}

// Cria e retorna um checkbox.
function checkbox(id) {

    // Cria um elemento HTML do tipo 'input'.
    let checkbox = document.createElement('input');

    // Configura o tipo do input para um 'checkbox'.
    checkbox.type = 'checkbox';

    // Adiciona um evento 'click' ao checkbox para atualizar a tarefa.
    checkbox.addEventListener('click', function(event){

        console.log(Number(checkbox.checked))

        // Atualiza a tarefa criada.
        updateTask(id, Number(checkbox.checked));

    });

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

// Atualiza tarefas do banco de dados.
function updateTask(id, control) {

    // Cria um objeto do tipo FormData para enviar os dados.
    var formData = new FormData();

    //Define os dados do objeto FormData.
    formData.append('action', 'update');
    formData.append('taskID', id);
    formData.append('taskControl', control);

    // Cria um objeto XMLHttpRequest para fazer a requisição AJAX.
    var request = new XMLHttpRequest();

    // Define o método e o URL da requisição.
    request.open("POST", SERVER, true);
    
    // Analisa o status da requisição.
    request.onload = function() {

        // Verifica se a requisição foi bem-sucedida.
        if (request.status >= 200 && request.status < 400) {

            // A requisição foi bem-sucedida.

            // Exibe a resposta da requisição no console.
            console.log(request.responseText); 
        
        // Verifica se a requisição não foi bem-sucedida.
        } else {
            
            // A requisição não foi bem-sucedida.
            
            console.error("Erro ao remover tarefa: " + request.status);
        }
    };

    // Verifica se houve erros na conexão.
    request.onerror = function() {

        // Erro na conexão.

        // Exibe o erro da conexão no console.
        console.error("Erro de conexão ao remover tarefa!");
    };

    // Envia os dados da tarefa a ser removida como parâmetro da requisição.
    request.send(formData);
}

// Remove tarefas do banco de dados.
function removeTask(id, task) {

    // Cria um objeto do tipo FormData para enviar os dados.
    var formData = new FormData();

    //Define os dados do objeto FormData.
    formData.append('action', 'remove');
    formData.append('taskID', id);

    // Cria um objeto XMLHttpRequest para fazer a requisição AJAX.
    var request = new XMLHttpRequest();

    // Define o método e o URL da requisição.
    request.open("POST", SERVER, true);
    
    // Analisa o status da requisição.
    request.onload = function() {

        // Verifica se a requisição foi bem-sucedida.
        if (request.status >= 200 && request.status < 400) {

            // A requisição foi bem-sucedida.
                    
            // Remove a tarefa do elemento 'createdTasks'.
            CREATEDTASKS.removeChild(task);

            // Remove a tarefa da lista de tarefas.
            TASKS.pop(task);

            // Exibe a resposta da requisição no console.
            console.log(request.responseText); 
        
        // Verifica se a requisição não foi bem-sucedida.
        } else {
            
            // A requisição não foi bem-sucedida.
            
            console.error("Erro ao remover tarefa: " + request.status);
        }
    };

    // Verifica se houve erros na conexão.
    request.onerror = function() {

        // Erro na conexão.

        // Exibe o erro da conexão no console.
        console.error("Erro de conexão ao remover tarefa!");
    };

    // Envia os dados da tarefa a ser removida como parâmetro da requisição.
    request.send(formData);
}

function getTasks() {

    // Cria um objeto do tipo FormData para enviar os dados.
    var formData = new FormData();

    //Define os dados do objeto FormData.
    formData.append('action', 'get');

    // Cria um objeto XMLHttpRequest para fazer a requisição AJAX.
    var request = new XMLHttpRequest();

    // Define o método e o URL da requisição.
    request.open("POST", SERVER, true);
    
    // Analisa o status da requisição.
    request.onload = function() {

        // Verifica se a requisição foi bem-sucedida.
        if (request.status >= 200 && request.status < 400) {

            // A requisição foi bem-sucedida.

            var tasks = JSON.parse(request.responseText);

            console.log(tasks)

            // Percorre o array de objetos JSON
            tasks.forEach(function(task) {
                // Imprime os dados de cada objeto
                console.log("ID: " + task.ID);
                console.log("Nome: " + task.Name);
                console.log("Controle: " + task.Control);

                insertTask(task.ID, task.Name, task.Control);
            });

        } else {

            // A requisição não foi bem-sucedida.
            console.error("Erro ao obter lista de tarefas: " + request.status);
        }
    };

    // Verifica se houve erros na conexão.
    request.onerror = function() {

        // Erro na conexão.
        console.error("Erro de conexão ao obter lista de tarefas!");
    };

    // Envia os dados da solicitação.
    request.send(formData);
}
