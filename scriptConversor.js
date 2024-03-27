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


function converter() {
    let valorUsuario = document.getElementById("valorEntrada").value;
    
    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;

    if (valorUsuario == "") {
        alert("Digite um valor");
        return;
    }

    if(moeda1 == moeda2) {
        alert("As moedas são iguais!!!");
        return;
    }

    let resultado = valorUsuario * valoresConversao[moeda1][moeda2];
    
    let simbolo = valoresConversao[moeda1]["simbolo"];

    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = simbolo + " " + resultado;
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