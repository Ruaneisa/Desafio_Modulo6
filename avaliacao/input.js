const prompt = require('prompt-sync')();

function solicitarInput(mensagem) {
    return prompt(mensagem);
}

function solicitarContato() {
    const nome = prompt('Nome: ');
    const telefone = prompt('Telefone: ');
    const email = prompt('Email: ');
    return { nome, telefone, email };
}

module.exports = {
    solicitarInput,
    solicitarContato
};