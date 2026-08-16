const prompt = require('prompt-sync')()

let vet=[]
let igual=0

for(let i=0;i<10;i++){
    vet[i]=Number(prompt("Digite um valor: "))
}

for(let i=0;i<10;i++){
    if(vet[i]==3){
        igual++
    }
}

console.log("O numero 3 apareceu ", igual, " vezes!")