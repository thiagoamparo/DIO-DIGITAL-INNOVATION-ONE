// Verifica atraves de um laço de repetição se a palavra informada eh um palindromo.
function manualPalindrome(string) {

    if ((typeof(string) != 'string') || (string.length == 0)) {
        
        return 'A palavra informada é invalida!';
    }

    string = string.toLocaleLowerCase();
    let stringReverse = '';

    for (let i = string.length - 1; i >= 0; i--) {

        stringReverse += string[i];        
    }

    return `A palavra informada ${string === stringReverse ? 'é' : 'não é'} um palíndromo!`;
}

// Verifica atraves de metodos do javascript se a palavra informada eh um palindromo.
function automaticPalindrome(string) {

    if ((typeof(string) != 'string') || (string.length == 0)) {
        
        return 'A palavra informada é invalida!';
    }

    string = string.toLocaleLowerCase();
    let stringReverse = string.split('').reverse().join('');

    return `A palavra informada ${string === stringReverse ? 'é' : 'não é'} um palíndromo!`;
}