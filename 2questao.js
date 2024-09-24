const prompt = require('prompt-sync')();

const userNames = prompt('Informe a sequência de nomes sepadarados por vírgula: ');

function greetUsers(nomes) {
    const listaNomes = nomes.split(',');

    listaNomes.forEach(nomes => {
        console.log(`Olá, ${nomes}! Este é o módulo 6.`);
    });
}

greetUsers(userNames);