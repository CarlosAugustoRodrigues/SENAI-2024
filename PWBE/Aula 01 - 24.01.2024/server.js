//Dependências - FrameWorks
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//Conexão com o SGBD mySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'lojinha'
});

//Rota de Teste
const teste = (req, res) => {
    res.send('Back-End respondendo');
}

//CRUD - Read
const read = (req, res) => {
    connection.query('SELECT * FROM Clientes', (err, result) => {
        if(err) res.json(err);
        else res.json(result);
    });
}

//Configurações de saída - FontEnd
const app = express();
app.use(express.json());
app.use(cors());

//Rotas de Saída - FrontEnd
app.get('/', teste);
app.get('/Clientes', read)

//Teste e porta do console
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});