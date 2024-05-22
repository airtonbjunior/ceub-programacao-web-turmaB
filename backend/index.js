const express = require('express');
const aplicacao = express();

aplicacao.get('/', (req, res) => {
    res.send("Chamei o backend com sucesso");
});

aplicacao.post('/', (req, res) => {
    res.send("Chamei o backend com sucesso usando post");
});

aplicacao.listen(4000, () => {
    console.log("Escutando na porta 4000");
})