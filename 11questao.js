const prompt = require('prompt-sync')();

function caesarCipher(char, shift) {
    const isLowerCase = char >= 'a' && char <= 'z';
    const isUpperCase = char >= 'A' && char <= 'Z';
    
    if (isLowerCase) {
        return String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
    } else if (isUpperCase) {
        return String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
    }
    return char; 
}

function encryptSentenceWithCaesarCipher(sentence, shift) {
    return sentence.split('').map(char => caesarCipher(char, shift)).join('');
}

const inputSentence = prompt('Digite a frase para cifrar: ');

let shiftAmount;
do {
    shiftAmount = parseInt(prompt('Digite o valor do shift (número inteiro): '), 10);
} while (isNaN(shiftAmount));

console.log(encryptSentenceWithCaesarCipher(inputSentence, shiftAmount));
