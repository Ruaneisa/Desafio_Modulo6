const prompt = require('prompt-sync')();

const numeros = prompt('Informe a sequência de números sepadarados por vírgula: ');

function findMax(array) {
    return Math.max(...array);
}

const numArray = numeros.split(',')
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

    if (!numeros.trim()) {
        console.log('Nenhum número foi informado.');
    } else {   
        if (numArray.length === 0) {
            console.log('Nenhum número válido foi digitado.');
        } else {
            const maior = findMax(numArray);
            console.log(`O maior número informado é: ${maior}`);
        }
    }