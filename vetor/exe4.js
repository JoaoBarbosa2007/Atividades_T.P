const prompt = require('prompt-sync')()

let temperatura = []
let maior, menor

for (let i = 0; i < 5; i++) {
    temperatura[i]=Number(prompt("Digite a temperatura do dia " + (i + 1) + ": "))
}

maior = temperatura[0]
menor = temperatura[0]

for (let i=1;i<temperatura.length;i++) {
    if (temperatura[i]>maior) {
        maior=temperatura[i];
    }

    if (temperatura[i]<menor) {
        menor=temperatura[i];
    }
}

console.log("Maior temperatura: ", maior)
console.log("Menor temperatura: ", menor)