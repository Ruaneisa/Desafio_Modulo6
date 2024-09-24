const prompt = require('prompt-sync')();

function sumOfUniqueEvenNumbers(numbers) {
    const uniqueEvenNumbers = [...new Set(numbers.filter(num => num % 2 === 0))];
    return uniqueEvenNumbers.reduce((acc, num) => acc + num, 0);
}

function input() {
    const numbers = prompt('Digite os números separados por vírgulas: ');
    return numbers.split(',').map(num => num.trim());
}

function isValidNumber(num) {
    return !isNaN(num) && num !== '';
}

function num() {
    let numbers;
    do {
        numbers = input();
        if (numbers.length === 0 || !numbers.every(isValidNumber)) {
            console.log('Por favor, insira números válidos separados por vírgulas.');
        }
    } while (numbers.length === 0 || !numbers.every(isValidNumber));

    const intNumbers = numbers.map(num => parseInt(num));
    const evenNumbersSum = sumOfUniqueEvenNumbers(intNumbers);
    console.log(`A soma dos números pares únicos é: ${evenNumbersSum}`);
}

num();
