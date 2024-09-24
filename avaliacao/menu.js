const { adicionarContato, listarContatos, atualizarContato, removerContato } = require('./gerenciador');
const prompt = require('prompt-sync')();

const MENU_MESSAGE = `
################ Lista de Compras ################
1. Adicionar contato
2. Listar contatos
3. Atualizar contato
4. Remover contato
5. Sair
###################################################
`;

function mostrarMenu() {
    console.log(MENU_MESSAGE);
    const opcao = prompt("Escolha uma opção: ").trim();

    switch (opcao) {
        case '1':
            adicionarContato();
            break;
        case '2':
            listarContatos();
            break;
        case '3':
            atualizarContato();
            break;
        case '4':
            removerContato();
            break;
        case '5':
            return true;
        default:
            console.log("Opção inválida. Tente novamente.\n");
    }
    return false;
}

module.exports = { mostrarMenu };