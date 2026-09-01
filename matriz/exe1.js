let matriz = [
    [0 ,0 ,0 ,0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

for(let i=0; i<matriz.length; i++){
    let linha = " ";
    for(let j =0; j<matriz[i].length; j++){
         linha+=matriz[i][j] + " "
    }
    console.log(linha)
}
