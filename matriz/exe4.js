let matriz = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

let Identidade = true;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i === j) {
            if (matriz[i][j] !== 1) {
                Identidade = false;
            }
        } else {
            if (matriz[i][j] !== 0) {
                Identidade = false;
            }
        }
    }
}

console.log("É matriz identidade?", Identidade);