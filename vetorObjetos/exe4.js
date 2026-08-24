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

let maisCaro = produtos[0]

for(let i=1;i<4;i++){
    if(produtos[i].preco > maisCaro.preco){
        maisCaro = produtos[i]
    }
}

console.log("Produto mais caro: " + maisCaro.nome)
console.log("Preço: R$ " + maisCaro.preco)