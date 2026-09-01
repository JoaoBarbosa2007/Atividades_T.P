let temperatura = [
    [28, 30, 27, 29, 31],  
    [15, 17, 16, 14, 18],  
    [22, 24, 23, 25, 21]
];

let maiorTempo = [0] [0];
let cidade = 0;
let dia = 0;

for(let i =0; i<temperatura.length; i++){
    for(let j =0; j<temperatura[i].length; j++){
        if(temperatura[i][j] > maiorTempo){
            maiorTempo = temperatura[i][j];
            cidade = i;
            dia = j;
        }
    }
}
console.log("Maior temperatura é: ", maiorTempo);
console.log("A cidade é: ", cidade , "e o dia é: ", dia)