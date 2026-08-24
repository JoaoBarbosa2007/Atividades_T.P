const prompt = require("prompt-sync")()

let livro = {
  titulo: prompt("Digite o título: "),
  autor: prompt("Digite o autor: "),
  ano: Number(prompt("Digite o ano: ")),
}

console.log(livro.titulo + " - " + livro.autor + " - " + livro.ano)