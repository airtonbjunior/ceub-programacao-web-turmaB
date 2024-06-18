const cors = require('cors');
const express = require('express');
const aplicacao = express();
aplicacao.use(cors({
    origin: 'http://localhost:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
const port = 4000;

/*
aplicacao.use(cors({
    origin: 'http://localhost:5500', // Permitir a origem específica
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Permitir envio de cookies
  }));
*/

const valoresConversao = {
    brl: {
        eur: 0.19,
        usd: 0.20,
        simbolo: "R$"
    },
    usd: {
        brl: 4.99,
        eur: 0.92,
        simbolo: "US$"
    },
    eur: {
        brl: 5.40,
        usd: 1.08,
        simbolo: "EU"
    }
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
    
    let moedas = req.params.moedas.split("-");
    let moeda1 = moedas[0].toLowerCase();
    let moeda2 = moedas[1].toLowerCase();

    console.log(moeda1);
    console.log(moeda2);

    console.log(valoresConversao[moeda1][moeda2]);
    
    conversao = {
        fatorConversao: valoresConversao[moeda1][moeda2]
    };
    
    res.status(200).json(conversao);
});


//aplicacao.METODO('/historico', (req, res) => {

    // Lógica da rota aqui

//});


//aplicacao.METODO('/historico/:conversao', (req, res) => {

    // Lógica da rota aqui

//});

// Aplicação ouvindo a porta 4000
aplicacao.listen(port, () => {
    console.log("Escutando na porta 4000");
})