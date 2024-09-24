const prompt = require('prompt-sync')();

function caesarCipher(str, shift) {
    const result = []; 
    shift = ((shift % 26) + 26) % 26; 

    function shiftChar(char) {
        const isLower = char >= 'a' && char <= 'z';
        const isUpper = char >= 'A' && char <= 'Z';
        
        if (isLower || isUpper) {
            const base = isLower ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        }
        return char; 
    }

    for (let i = 0; i < str.length; i++) {
        result.push(shiftChar(str[i])); 
    }
    return result.join(''); 
}

const inputString = prompt('Digite a string para cifrar: ');
const shiftAmount = parseInt(prompt('Digite o valor do shift: '), 10);
console.log(caesarCipher(inputString, shiftAmount));
