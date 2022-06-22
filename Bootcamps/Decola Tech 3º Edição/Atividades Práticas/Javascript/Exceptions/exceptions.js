// Funcao pronta para tratar um possivel erro caso o mesmo ocorra.
function exceptions(array, length) {

    // Trata um possivel erro em tempo de execucao caso o mesmo ocorra.
    try {
    
        // Cria condicoes necessarias para disparar um erro.

        if (!array || !length) {

            throw new ReferenceError('O parâmetro informado é inválido!');
        }
        
        if (typeof array != 'object') {

            throw new TypeError('É esperado um objeto do tipo Array!');
        }

        if (typeof length != 'number') {

            throw new TypeError('É esperado um objeto do tipo Number!');
        }

        if (array.length != length) {

            throw new RangeError('Tamanho do array inválido!');
        }

        // Caso não ocorra nenhum erro retorna o array.
        return array;
    
    // Recebe e trata o erro de acordo com seu tipo.
    } catch (error) {

        // Realiza a verificacao de como o erro sera tratado.
        
        if (error instanceof RangeError) {

            console.log(`Um erro do tipo RangeError foi gerado: ${error.message}`);

        } else if (error instanceof ReferenceError) {

            console.log(`Um erro do tipo ReferenceError foi gerado: ${error.message}`);

        } else if (error instanceof TypeError) {

            console.log(`Um erro do tipo TypeError foi gerado: ${error.message}`);

        } else {

            console.log(`Um erro inesperado foi gerado: ${error.message}`);
        }
    }
}