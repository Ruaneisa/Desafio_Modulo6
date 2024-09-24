const prompt = require('prompt-sync')();

function removeDuplicatesAndCountVowels(input) {
    if (!input) {
        console.log("Por favor, digite uma string válida.");
        return;
    }

    const { uniqueChars, vowelCount } = processString(input);
    
    console.log(`String com caracteres únicos: ${uniqueChars}`);
    console.log(`Número de vogais: ${vowelCount}`);
}

function processString(string) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const uniqueChars = [];
    let vowelCount = 0;

    for (const char of string) {
        const lowerChar = char.toLowerCase();
        if (!uniqueChars.includes(lowerChar)) {
            uniqueChars.push(lowerChar);
            if (vowels.has(lowerChar)) {
                vowelCount++;
            }
        }
    }

    return { uniqueChars: uniqueChars.join(''), vowelCount };
}

const string = prompt('Digite uma string: ');

removeDuplicatesAndCountVowels(string);
