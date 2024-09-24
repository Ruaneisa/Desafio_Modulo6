const prompt = require('prompt-sync')();

function removeDuplicates(array) {
    return [...new Set(array)];
}

function sortUniqueNumbers(numbers) {
    const uniqueNumbers = removeDuplicates(numbers);
    return uniqueNumbers.sort((a, b) => a - b);
}

function input() {
    const numbers = prompt('Digite os números separados por vírgulas: ');
    return numbers.split(',')
                  .map(num => parseFloat(num.trim())) 
                  .filter(num => !isNaN(num)); 
}

function num() {
    const numbers = input();
    if (numbers.length === 0) {
        console.log('Nenhum número válido foi inserido. Tente novamente.');
        return num(); 
    } 
    const orderedNumbers = sortUniqueNumbers(numbers);
    console.log(`Números únicos ordenados: ${orderedNumbers}`);
}

num();
