const prompt = require('prompt-sync')();

const numeros = prompt('Informe a sequência de números sepadarados por vírgula: ');

function getUniqueValues(array) {
    return Array.from(new Set(array)); 
}

const numArray = numeros.split(',')
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

if (numArray.length === 0) {
    console.log('Nenhum número foi digitado.');
} else {
    const uniqueNumbers = getUniqueValues(numArray);
    console.log(`${uniqueNumbers.join(', ')}`); 
}