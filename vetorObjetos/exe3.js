const prompt = require("prompt-sync")()

let produtos = []
let total = 0

for (let i = 0; i < 4; i++) {
  let produto = {
    nome: prompt("Digite o nome do produto: "),
    preco: Number(prompt("Digite o preço: ")),
    estoque: Number(prompt("Digite o estoque: ")),
  }

  produtos[i] = produto
}

for (let i = 0; i < 4; i++) {
  total = total + produtos[i].preco * produtos[i].estoque
}

console.log("Valor total do estoque: R$ " + total)