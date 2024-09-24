const { mostrarMenu } = require('./menu');

function main() {
    while (true) {
        const sair = mostrarMenu();
        if (sair) break;
    }
}

main();