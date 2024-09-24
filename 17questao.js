const prompt = require('prompt-sync')();

function getEvenNumbers(totalCount) {
    return Array.from({ length: totalCount }, (_, i) => (i + 1) * 2);
}

function drawEvenNumberTriangle(n) {
    if (n <= 0) {
        return;
    }

    const totalNumbers = (n * (n + 1)) / 2;
    const evenNumbers = getEvenNumbers(totalNumbers);

    let index = 0;

    for (let i = 1; i <= n; i++) {
        const line = evenNumbers.slice(index, index + i).join(' ');
        console.log(line);
        index += i;
    }
}

function numberRequest() {
    let number;
    do {
        number = prompt("Digite a altura do triângulo: ");
        number = parseInt(number, 10);
        if (isNaN(number) || number <= 0) {
            console.log('Entrada inválida. ');
        }
    } while (isNaN(number) || number <= 0);
    return number;
}

function main() {
    const height = numberRequest();
    drawEvenNumberTriangle(height);
}

main();
