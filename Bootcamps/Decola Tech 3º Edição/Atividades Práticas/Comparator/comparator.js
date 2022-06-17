// Compara se dois numeros sao iguais e retorna uma frase.
function comparator(number1, number2) {

    // Verifica se os parametros passados sao numeros.
    if (((!Number(number1)) && (number1 != 0)) || ((!Number(number2)) && (number2 != 0))) {
        
        // Caso nao sejam retorna uma mensagem de aviso.
        return 'Informe apenas numeros!'
    }

    // Verifica se ambos os numeros são iguais.
    let equals = (number1 === number2);

    // Soma ambos os numeros.
    let sum = (number1 + number2);

    // Verifica se a soma de ambos os numeros ultrapassa o valor 10.
    let range10 = (sum > 10);

    // Verifica se a soma de ambos os numeros ultrapassa o valor 20.
    let range20 = (sum > 20);

    // Formula a string que deve ser devolvida.
    return `Os números ${number1} e ${number2} ${(equals) ? 'são' : 'não'} iguais. Sua soma é ${sum}, que é ${(range10) ? 'maior' : 'menor'} que 10 e ${(range20) ? 'maior' : 'menor'} que 20.`;
}