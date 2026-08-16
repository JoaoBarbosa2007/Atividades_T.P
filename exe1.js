const prompt = require('prompt-sync')()

let vet=[]

for(let i=0;i<10;i++){
    vet[i]=Number(prompt("Digite um valor: "))
}

for(let i=0;i<10;i++){
    console.log(vet[i])
}