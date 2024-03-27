document.getElementById("botao").addEventListener("click", function(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login == "tete" && senha == "09092022") {
        window.location.href = "https://www.instagram.com/arthurreis.22/?hl=pt-br";
    }else{
        alert("deu ruim");
    }
});