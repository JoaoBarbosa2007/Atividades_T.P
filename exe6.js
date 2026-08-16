const prompt = require('prompt-sync')()

let vet=[32,1,45,87,5]

let inicio=0
let fim=vet.length-1

while (inicio<fim){
    let temp=vet[inicio]
    vet[inicio]=vet[fim]
    vet[fim]=temp  
    inicio++
    fim--
}  

for (let i=0;i<vet.length;i++){
    console.log(vet[i])
}