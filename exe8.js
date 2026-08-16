const prompt = require('prompt-sync')()

let vet = []

for (let i = 0; i < 5; i++) {
    vet[i] = Number(prompt("Escreva um numero:"))
}

for (let i = 0; i < vet.length - 1; i++) {
    for (let j = 0; j < vet.length - 1 - i; j++) {
        if (vet[j] > vet[j + 1]) {
            let temp = vet[j];
            vet[j] = vet[j + 1];
            vet[j + 1] = temp;
        }
    }
}

for (let i = 0; i < vet.length; i++) {
    console.log(vet[i])
}