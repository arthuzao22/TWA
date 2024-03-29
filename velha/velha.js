let velha = document.querySelectorAll("td");
let cont = 0;
let verific = document.getElementById("text");

velha.forEach(velha => {
    velha.addEventListener("click", event => {
        console.log(velha.id); // Exibirá o id da célula clicada
        cont++;
        console.log(cont);
        if (cont % 2 == 0) {
            velha.innerText = "x";
            verific.innerText = "VEZ DO JOGADOR: O";
        } else {
            velha.innerText = "o";
            verific.innerText = "VEZ DO JOGADOR: X";
        }
    })
});
