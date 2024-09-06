let botao = document.getElementById("click-me");
let aparecer = document.getElementById("counter");
let cont = 0;

botao.addEventListener("click", event=>{
    cont++;
    aparecer.innerText = cont;
    console.log(cont);
})