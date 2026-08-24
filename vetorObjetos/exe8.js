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

for(let i=0;i<4;i++){
    produtos[i].desconto = 10
}

console.log("Produtos atualizados:")

for(let i=0;i<4;i++){
    console.log(
        produtos[i].nome + 
        " - R$ " + produtos[i].preco + 
        " - Estoque: " + produtos[i].estoque + 
        " - Desconto: " + produtos[i].desconto + "%"
    )
}