const { solicitarContato, solicitarInput } = require('./input');
const Contato = require('./perfilContato');

let contatos = [];
let nextId = 1;

function adicionarContato() {
    const { nome, telefone, email } = solicitarContato();
    const novoContato = new Contato(nextId++, nome, telefone, email);
    contatos.push(novoContato);
    console.log('Contato adicionado com sucesso!\n');
}

function listarContatos() {
    console.log("\n##### Lista de Contatos #####");
    if (contatos.length === 0) {
        console.log("Nenhum contato encontrado.");
    } else {
        contatos.forEach(({ id, nome, telefone, email }) => {
            console.log(`ID: ${id}, Nome: ${nome}, Telefone: ${telefone}, Email: ${email}`);
        });
    }
    console.log("########################\n");
}

function atualizarContato() {
    const id = parseInt(solicitarInput('ID do contato a ser atualizado: '));
    const contato = contatos.find(contato => contato.id === id);

    if (!contato) {
        console.log('Contato não encontrado.\n');
    } else {
        const { nome, telefone, email } = solicitarContato();
        contato.nome = nome;
        contato.telefone = telefone;
        contato.email = email;
        console.log('Contato atualizado com sucesso!\n');
    }
}

function removerContato() {
    const id = parseInt(solicitarInput('ID do contato a ser removido: '));
    const index = contatos.findIndex(contato => contato.id === id);

    if (index === -1) {
        console.log('Contato não encontrado.\n');
    } else {
        contatos.splice(index, 1);
        console.log('Contato removido com sucesso!\n');
    }
}

module.exports = {
    adicionarContato,
    listarContatos,
    atualizarContato,
    removerContato 
};