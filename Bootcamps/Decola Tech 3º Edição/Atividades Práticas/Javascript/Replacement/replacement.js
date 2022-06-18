// Substitui os elemetos pares e diferentes de zero de um array por zero.
function replacement(array) {

    if ((!array instanceof Array) || (!array.length)) { return -1; }

    for (let i = 0; i < array.length; i++) {

        if ((array[i] % 2 == 0) && (array[i] != 0)) {

            array[i] = 0;
        }
    }

    return array;
}