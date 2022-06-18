// Coleta o elemento 'counterNumber' da pagina HTML.
const COUNTER_NUMBER = document.getElementById('counterNumber');

// Coleta o elemento 'squares' da pagina HTML.
const SQUARES = document.getElementById('squares');

// Coleta o elemento 'notice' da pagina HTML.
const NOTICE = document.getElementById('notice');

// Coleta o numero atual do elemento 'counterNumber' da pagina HTML.
let currentNumber = parseInt(COUNTER_NUMBER.innerText);

// Adiciona um evento 'click' aos botoes do contador da pagina HTML.
document.getElementById('add').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', subtract);

// Determina as cores de acordo com o numero do contador.
function selectColor() {

    // Caso o numero seja igual a zero.
    if (currentNumber == 0) {

        // Retorna a classe do elemento HTML para vazio.
        COUNTER_NUMBER.className = '';
    
    // Caso o numero seja positivo.
    } else if (currentNumber > 0) {

        // Inseri-se a classe 'positive' ao elemento HTML.
        COUNTER_NUMBER.className = 'positive';
    
    // Caso o numero seja negativo.
    } else {

        // Inseri-se a classe 'negative' ao elemento HTML.
        COUNTER_NUMBER.className = 'negative';
    };
}

// Incrementa o numero do contador.
function add() {    

    // Limita o contador ate 10.
    if (currentNumber < 10) {

        // Incrementa o numero do contador em 1.
        currentNumber++;

        // Insere o numero incrementado ao elemento HTML do contador.
        COUNTER_NUMBER.innerText = currentNumber;

        // Adiciona um quadrado na caixa de quadrados.
        addSquare();
    };
    
    // Define a cor que o numero do contador devera receber.
    selectColor();

    // Verifica o estado atual da caixa de quadrados.
    squaresBoxStatus();
}

// Decrementa o numero do contador.
function subtract() {

    // Limita o contador ate -10.
    if (currentNumber > -10) {

        // Decrementa o numero do contador em 1.
        currentNumber--;

        // Insere o numero decrementado ao elemento HTML do contador.
        COUNTER_NUMBER.innerText = currentNumber;

        // Remove um quadrado da caixa de quadrados.
        subtractSquare();
    };

    // Define a cor que o numero do contador devera receber.
    selectColor();

    // Verifica o estado atual da caixa de quadrados.
    squaresBoxStatus();
}

// Adiciona um quadrado na caixa de quadrados.
function addSquare() {

    // Verifica se o numero do contador é positivo.
    if (currentNumber > 0) {

        // Cria um elemento HTML do tipo 'div'.
        let square = document.createElement('div');

        // Inseri-se a classe 'positive' ao elemento HTML criado.
        square.className = 'square squarePositive';

        // Adiciona o elemento HTML criado na caixa de quadrados.
        SQUARES.appendChild(square);
    
    // Verifica se o numero do contador é negativo.
    } else {

        // Remove o ultimo elemento HTML criado da caixa de quadrados.
        SQUARES.removeChild(SQUARES.lastChild);
    };    
}

// Remove um quadrado da caixa de quadrados.
function subtractSquare() {

    // Verifica se o numero do contador é positivo.
    if (currentNumber >= 0) {

        // Remove o ultimo elemento HTML criado da caixa de quadrados.
        SQUARES.removeChild(SQUARES.lastChild);

    // Verifica se o numero do contador é negativo.
    } else {
        
        // Cria um elemento HTML do tipo 'div'.
        let square = document.createElement('div');

        // Inseri-se a classe 'negative' ao elemento HTML criado.
        square.className = 'square squareNegative';

        // Adiciona o elemento HTML criado na caixa de quadrados.
        SQUARES.appendChild(square);
    };
}

// Determina as cores da caixa de quadrados de acordo com a capacidade atual.
function squaresBoxStatus() {

    // Verifica se a quantidade de itens na caixa é zero.
    if (SQUARES.childElementCount == 0) {

        // Remove a cor da caixa de quadrados.
        SQUARES.className = '';
        
        // Remove o texto de aviso.
        NOTICE.innerText = '';

    // Verifica se a quantidade de itens na caixa esta abaixo de cinco. 
    } else if ((SQUARES.childElementCount >= -5) && (SQUARES.childElementCount <= 5)) {

        // Insere a cor que representa 'capacidade minima' na caixa de quadrados.
        SQUARES.className = 'positive';

        // Insere o texto que representa 'capacidade minima' na caixa de quadrados.
        NOTICE.innerText = 'Capacidade Mínima';

        // Define a cor do texto.
        NOTICE.style.color = '#4cae4c';

    // Verifica se a quantidade de itens na caixa esta abaixo de dez.
    } else if ((SQUARES.childElementCount > -10) && (SQUARES.childElementCount < 10)) {

        // Insere a cor que representa 'capacidade media' na caixa de quadrados.
        SQUARES.className = 'warning';

        // Insere o texto que representa 'capacidade media' na caixa de quadrados.
        NOTICE.innerText = 'Capacidade Média';

        // Define a cor do texto.
        NOTICE.style.color = '#eba745';

    // Verifica se a quantidade de itens na caixa é dez.
    } else {

        // Insere a cor que representa 'capacidade maxima' na caixa de quadrados.
        SQUARES.className = 'negative';

        // Insere o texto que representa 'capacidade maxima' na caixa de quadrados.
        NOTICE.innerText = 'Capacidade Máxima';

        // Define a cor do texto.
        NOTICE.style.color = '#d43f3a';
    };
}