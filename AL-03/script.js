/*
for (let i = 1; i < 11; i++) {
    console.log("Mariana conta: " + i);
    for (let j = 1; j <= i; j++) {
        console.log("Mariana conta " + i + ": é ");
    }
    console.log("Ana, viva a Mariana, viva a Mariana");
    console.log(" ");
}
*/
/*
let letra = "";

for (let i = 0; i <= 99; i++) {
    letra += `Mariana conta ${i} \n`;
    letra += `Mariana conta ${i}`;
    
    for (let j = 0; j <= i; j++) {
        letra += `é ${j}`;
    }
    
    letra += `é!\n`;
    letra += `Ana, viva a Mariana, viva a Mariana\n`;
}

console.log(letra);
*/

//-------------------------------------------------------

var aluno ={
    nome: "ARTHUR",
    matricula: 123,
    nota: 9,
    frequencia: 1.7,
    imprimeNota: function () {
        console.log(`Nota: ${this.nota}`);
    },
    imprimeFreq: function () {
        console.log(`Frequencia: ${this.frequencia}`);
    },
    vericaAprov: function (media) {
        if (this.nota >= media) {
            return true;
        }else{
            return false;
        }
    }
};
aluno.imprimeNota();
aluno.imprimeFreq();
console.log(aluno.vericaAprov(6));