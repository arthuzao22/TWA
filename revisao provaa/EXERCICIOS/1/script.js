let botao = document.querySelectorAll("td");
let cont = 0;
console.log(botao);
botao.forEach(botao => {
    botao.addEventListener("click", event => {
        cont++;
        if (cont % 2 == 0) {
            botao.innerText = "X";
        } else {
            botao.innerText = "o";
        }
    })
});

let reset = document.getElementById("reset");

reset.addEventListener("click", event => {
    botao.forEach(botao => {
        botao.innerText = " ";        
    });

})

