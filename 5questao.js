const prompt = require('prompt-sync')();

function verificarNum(input) {
    const num = Number(input); 
    if (isNaN(num)) {
        console.log('Você digitou um valor inválido.');
        return num;
    }
    return true;
}

function isPrime(number) {
    if (number <= 1) return false; 
    if (number <= 3) return true;  
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

const input = prompt('Digite um número para verificar se é primo: ');

if(verificarNum(input)){
    if (isPrime(input)) {
        console.log(`${input} é um número primo.`);
    } else {
        console.log(`${input} não é um número primo.`);
    }
} 
