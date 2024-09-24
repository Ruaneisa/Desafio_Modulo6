const prompt = require('prompt-sync')();

function drawTriangle(n) {
    if (typeof n !== 'number' || n <= 0) {
        return;
    }
    
    for (let i = 1; i <= n; i++) {
        let stars = '*'.repeat(i);
        console.log(stars);
    }
}
function numberRequest() {
    let number = prompt("Digite a altura de um triângulo: ");
    return parseInt(number, 10);
}

const height = numberRequest();

if (!isNaN(height) && height > 0) {
    drawTriangle(height);
} else {
    console.log('Entrada inválida.');
}
