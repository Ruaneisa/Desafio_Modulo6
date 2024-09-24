const prompt = require('prompt-sync')();

function reverseString(sentence) {
    const words = sentence.trim().split(/\s+/);
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}

function reverseWordsInSentence() {
    const sentence = prompt('Digite a frase: ').trim();
    if (sentence.length === 0) {
        console.log('Por favor, insira uma frase válida.');
        return reverseWordsInSentence(); 
    }
    console.log(reverseString(sentence));
}

reverseWordsInSentence();
