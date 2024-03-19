//let citacao = document.getElementById ("teste1"); //getElementById seleciona o elemento pelo id

//citacao.innerText = 'mudar texto pelo "innerText"';

//console.log(citacao);

// ----------------------------------------------------

//let listas = document.getElementsByTagName("ul");

//console.log(listas);

// ------------------------------------------------------

//let cabecalhosPequenos = document.querySelector("teste1"); // pega só o primeiro e modifica ele

//let cabecalhosP = document.querySelectorAll("teste1"); // pega todos

//let todos = document.querySelectorAll("ul"); // pega todos

//-----------------------------------------------------

//cabecalhosP.forEach(element => {
//    console.log(element);
//});

//------------------------------------------------------

// document.body.classList.add("bgBlack"); // adicionar o background todo preto
// document.body.classList.remove("bgBlack"); // tirar

//document.body.classList.toggle("bgBlack"); //famoso interruptor

//-------------------------------------------------------

//document.body.clasName = "teste teste34";

let imagem = document.querySelector("img");
console.log(imagem.attributes["height"]); //adiona uma img
imagem.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDLlfm0caar3Y1PEIxltfRabcQbKHHqnJ-XbQLl35yw&s");

document.body.setAttribute("style", "background: blue; color: yellow; font-size:"); // funciona para mudar as coisas no body, tipo css

//----------------------------------------------------

let image = document.querySelector("img"); //qunado houver o click na primeira imagem vai subir um alert

image.addEventListener("click", ()=> {
    alert("deu bom");
});