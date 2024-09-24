const prompt = require('prompt-sync')();

function reverseString(text) {
    return text.split("").reverse().join("");
}

const palavra = prompt('Informe a palavra que será invertida: ');
const palavraInvertida = reverseString(palavra);
console.log(`A palavra invertida é: ${palavraInvertida}`);
