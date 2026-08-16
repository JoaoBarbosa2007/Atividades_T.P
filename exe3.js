const prompt = require('prompt-sync')()

let vet = []

for (let i=0;i<5;i++) {
    vet[i] = Number(prompt("Digite um valor: "))
}

let valor = Number(prompt("Digite o valor que deseja procurar: "))

let posicao = -1

for (let i=0;i<vet.length;i++) {
    if (vet[i] === valor) {
        posicao = i
        break
    }
}

console.log("Indice:", posicao)