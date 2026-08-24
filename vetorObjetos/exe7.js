const prompt = require('prompt-sync')()

let produtos = []

for(let i=0;i<4;i++){
    let produto = {
        nome: prompt("Digite o nome do produto: "),
        preco: Number(prompt("Digite o preço: ")),
        estoque: Number(prompt("Digite o estoque: "))
    }

    produtos[i] = produto
}

let nomeBusca = prompt("Digite o nome do produto que deseja alterar: ")
let novoPreco = Number(prompt("Digite o novo preço: "))

for(let i=0;i<4;i++){
    if(produtos[i].nome == nomeBusca){
        produtos[i].preco = novoPreco
    }
}

console.log("Vetor atualizado:")

for(let i=0;i<4;i++){
    console.log(
        produtos[i].nome + 
        " - R$ " + produtos[i].preco + 
        " - Estoque: " + produtos[i].estoque
    )
}