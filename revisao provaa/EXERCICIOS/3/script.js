let form = document.getElementById("myform");
let quadro = [];
let t = document.getElementById("p");

form.addEventListener("submit", event => {
    event.preventDefault();
    let text = form.elements["name"]; // Correcting the typo here
    let meuTexto = text.value; // Correcting variable name

    quadro.push({
        meuTexto: meuTexto
    });
    quadro.forEach(quadro => {
        console.log(quadro);
    });
    // t.innerText = quadro[0].meuTexto;

});

