let temperatura = [
    [28, 30, 27, 29, 31],  
    [15, 17, 16, 14, 18],  
    [22, 24, 23, 25, 21]
];

let media = [];

for(let i =0; i<temperatura.length; i++){
    let soma = 0;
    for(let j =0; j<temperatura[i].length; j++){
        soma += temperatura[i][j];
    }
     media = soma / temperatura[i].length
}
console.log("A média é: " ,media)