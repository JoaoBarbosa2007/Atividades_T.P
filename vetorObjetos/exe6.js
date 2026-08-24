const prompt = require('prompt-sync')()

let produtos = []
let quantidade = 0

for(let i=0;i<4;i++){
    let produto = {
        nome: prompt("Digite o nome do produto: "),
        preco: Number(prompt("Digite o preço: ")),
        estoque: Number(prompt("Digite o estoque: "))
    }

    produtos[i] = produto
}

for(let i=0;i<4;i++){
    if(produtos[i].estoque < 5){
        quantidade++
    }
}

console.log("Quantidade de produtos com estoque abaixo de 5: " + quantidade)