const prompt = require('prompt-sync')()

let alunos = []

for(let i=0;i<4;i++){
    let aluno = {
        nome: prompt("Digite o nome do aluno: "),
        idade: Number(prompt("Digite a idade: "))
    }

    alunos[i] = aluno
}

let nomeBusca = prompt("Digite o nome que deseja buscar: ")
let encontrado = null

for(let i=0;i<4;i++){
    if(alunos[i].nome == nomeBusca){
        encontrado = alunos[i]
    }
}

if(encontrado != null){
    console.log("Aluno encontrado!")
    console.log("Nome: " + encontrado.nome)
    console.log("Idade: " + encontrado.idade)
}
else{
    console.log("Aluno não encontrado!")
}