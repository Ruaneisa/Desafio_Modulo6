const prompt = require('prompt-sync')();

function getOddNumbers(array) {
    return array.filter(function(numeros) {
      return numeros % 2 !== 0; 
    });
  }

const numeros = prompt('Informe a sequência de números sepadarados por vírgula: ');

const numArray = numeros.split(',')
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

if (numArray.length === 0) {
    console.log('Nenhum número foi digitado.');
} else {
    const numerosPares = getOddNumbers(numArray);
    console.log(`${numerosPares.join(', ')}`); 
}