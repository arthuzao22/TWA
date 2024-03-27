let imagens = [
    "imgs/2.png",
    "imgs/3.png",
    "imgs/4.png",
    "imgs/5.png",
    "imgs/6.png",
];
let nomes = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
];

let grupo = document.querySelector("div");
grupo.innerHTML += `<div id="nomes"></div>`; // serve para adicionar mais uma tag sem mexer no "index.html"


let atual = 0;

let quadro = document.querySelector("img");
quadro.setAttribute("src", imagens[atual]);

let prox = document.getElementById("prox"); // pega o id do botão
let ant = document.getElementById("ant");

prox.addEventListener("click", event =>{ // sempre quando houver o click a imagem irá mudar pois o "atual++" vai atulizar para a proxima
    event.preventDefault();
    console.log(atual);
    if ( atual >= imagens.length ) {
        atual = 0;
    }
    quadro.setAttribute("src", imagens[atual++]);        
});

ant.addEventListener("click", event =>{
    event.preventDefault();
    console.log(atual);
    if (atual <= 0) {
        atual = imagens.length - 1;
    }
    quadro.setAttribute("src", imagens[atual--]);        
});
