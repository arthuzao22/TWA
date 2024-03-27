let i1 = document.getElementById("btn-pequeno");
let i2 = document.getElementById("btn-regular");
let i3 = document.getElementById("btn-grande");

i1.addEventListener("click", event => {
    let elementos = document.querySelectorAll(".texto");
    elementos.forEach(elemento => {
        elemento.classList.add("texto-pequeno");
        elemento.classList.remove("texto-regular");
        elemento.classList.remove("texto-grande");
    });
});

i2.addEventListener("click" , event=> {
    let elementos = document.querySelectorAll(".texto");
    elementos.forEach(elemento => {
        elemento.classList.remove("texto-pequeno");
        elemento.classList.add("texto-regular");
        elemento.classList.remove("texto-grande");
    });
});
i3.addEventListener("click" , event=> {
    let elementos = document.querySelectorAll(".texto");
    elementos.forEach(elemento => {
        elemento.classList.remove("texto-pequeno");
        elemento.classList.remove("texto-regular");
        elemento.classList.add("texto-grande");
    });
});
