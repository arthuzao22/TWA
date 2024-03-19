let imagens = [
    "imgs/2.png",
    "imgs/3.png",
    "imgs/4.png",
    "imgs/5.png",
    "imgs/6.png",
];
let atual = 0;

let quadro = document.querySelector("img");
quadro.setAttribute("src", imagens[atual]);

let prox = document.getElementById("prox"); // pega o id do botão
let ant = document.getElementById("ant");

prox.addEventListener("click", event =>{ // sempre quando houver o click a imagem irá mudar pois o "atual++" vai atulizar para a proxima
    event.preventDefault();
    console.log(atual);
    if ( atual < imagens.length) {
        quadro.setAttribute("src", imagens[atual++]);        
    }
});

ant.addEventListener("click", event =>{
    event.preventDefault();
    console.log(atual);
    if (atual <= imagens.length && atual > 0) {
        quadro.setAttribute("src", imagens[atual--]);        
    }
});