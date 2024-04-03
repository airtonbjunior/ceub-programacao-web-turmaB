const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20,
        simbolo: "R$"
    },
    dolar: {
        real: 4.99,
        euro: 0.92,
        simbolo: "US$"
    },
    euro: {
        real: 5.40,
        dolar: 1.08,
        simbolo: "EU"
    }
}

const botaoInverter = document.getElementById("botao-inverter");
botaoInverter.addEventListener("click", inverter);

const botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click", converter);

const botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limpar);


//document.addEventListener("keydown", function(event) {
//    console.log(event);
//});



let valorUsuario = document.getElementById("valorEntrada");
valorUsuario.addEventListener("keypress", function(event) {

    //event.preventDefault();
    //console.log(event);

    //if(event.ctrlKey == true && event.code == "KeyL") {
    //    alert("oi");
    //    event.preventDefault();
    //    limpar();
    //}


    if(event.ctrlKey == true && event.code == "KeyI") {
        
        event.preventDefault();
        inverter();
    }



    if(event.key == "Enter") {
        event.preventDefault();
        converter();
    }
});


function converter() {
    let valorUsuario = document.getElementById("valorEntrada").value;

    console.log(valorUsuario);

    if(valorUsuario <= 0 || valorUsuario == "") {
        alert("Verificar valor");
        return;
    }
    
    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;

    if(moeda1 == moeda2) {
        alert("As moedas são iguais!!!");
        return;
    }

    let simbolo = valoresConversao[moeda2]["simbolo"];
    //console.log(simbolo);

    let resultado = valorUsuario * valoresConversao[moeda1][moeda2];
    
    console.log(resultado);

    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = simbolo + " " + resultado.toFixed(2);
}

function limpar() {
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = "";

    let valorEntrada = document.getElementById("valorEntrada");
    valorEntrada.value = "";
}

function inverter() {
    let valorMoeda1 = document.getElementById("moeda1").value;
    let valorMoeda2 = document.getElementById("moeda2").value;

    document.getElementById("moeda1").value = valorMoeda2;
    document.getElementById("moeda2").value = valorMoeda1;
}