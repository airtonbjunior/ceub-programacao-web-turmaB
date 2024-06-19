const express = require('express');
const cors = require('cors');
const aplicacao = express();
const port = 4000;

aplicacao.use(cors());

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

const relacaoMoedas = {
    BRL: "real",
    USD: "dolar", 
    EUR: "euro"
}

aplicacao.get('/', (req, res) => {
    res.send("Chamei o backend com sucesso");
});

aplicacao.post('/', (req, res) => {
    res.send("Chamei o backend com sucesso usando post");
});

aplicacao.get('/moedas', (req, res) => {
    
    const moedas = {
        BRL: "real",
        USD: "dolar", 
        EUR: "euro"
    }

    res.status(200).json(moedas);

});

aplicacao.post('/moedas', (req, res) => {
    const moedas = {
        BRL: "real",
        USD: "dolar", 
        EUR: "euro"
    }

    res.status(200).json(moedas);
})

aplicacao.get('/info', (req, res) => {

    const informacoes = {
        version: "1.0",
        author: "Airton",
        update: "Maio de 2024",
        price: "Free",
        license: "ABC"
    }

    res.status(200).json(informacoes);
});

aplicacao.get('/conversao/:moedas', (req, res) => {
    // processo de conversão
    let moedas = req.params.moedas.split("-");
    let moeda1 = moedas[0].toUpperCase();
    let moeda2 = moedas[1].toUpperCase();

    console.log("moeda 1 é -> " + moeda1);
    console.log("moeda 2 é -> " + moeda2);
    
    console.log(relacaoMoedas[moeda1]);
    console.log(relacaoMoedas[moeda2]);

    console.log(valoresConversao[relacaoMoedas[moeda1]][relacaoMoedas[moeda2]]);

    let fatorConversao = valoresConversao[relacaoMoedas[moeda1]][relacaoMoedas[moeda2]]

    conversao = {
        fator: fatorConversao
    };


    res.status(200).json(conversao);
});

// Aplicação ouvindo a porta 4000
aplicacao.listen(port, () => {
    console.log("Escutando na porta 4000");
})