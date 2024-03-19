var rep = " ";
var conta = "";
for (let i = 1; i < 11; i++) {
    if (i % 2 == 1) {
        console.log(i + " Elefantes incomodam Muito a Gente");
    }
    for (let j = 0; j <= i; j++) {
        rep += ("incomodam, ");
    }
    if (i % 2 == 1) {
        console.log(i + 1 + " elefantes" + rep + "muito mais");
    }
    console.log("\n");    
    rep = "  ";
}
for (let i = 10; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i + " Elefante incomodam Muito a Gente");
    }
    for (let j = 1; j < i; j++) {
        rep += ("incomodam, ");
    }
    console.log(i - 1 + " elefantes" + rep + "muito menos");

    console.log(" ");
    rep = " ";
}

