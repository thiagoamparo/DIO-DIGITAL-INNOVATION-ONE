function exceptions(array, length) {

    try {
    
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

        return array;
    
    } catch (error) {
        
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

console.log(exceptions([], []));