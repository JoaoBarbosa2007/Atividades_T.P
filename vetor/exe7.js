const prompt = require('prompt-sync')()

let vet = [10, 20, 30, 40, 50]
let posicao, valor

posicao = Number(prompt("Digite a posição para inserir: "))
valor = Number(prompt("Digite o valor: "))

for (let i=vet.length;i>posicao;i--) {
    vet[i] = vet[i - 1];
}

vet[posicao] = valor

console.log("Vetor antes da inserção:")
console.log(vet)

posicao = Number(prompt("Digite a posição para remover: "))

for (let i=posicao;i<vet.length-1;i++) {
    vet[i] = vet[i + 1];
}

vet.length--

console.log("Vetor depoois da remoção:")
console.log(vet)