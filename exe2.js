const prompt = require('prompt-sync')()

let vet=[]
let soma=0

for(let i=0;i<4;i++){
    vet[i]=Number(prompt("Digite um valor: "))
    soma+=vet[i]
}

for(let i=0;i<4;i++){
    console.log("Nota do ", i+1, " bimestre: ", vet[i])
}

console.log("Soma das notas: ",soma)
console.log("Media das notas: ", soma/4)