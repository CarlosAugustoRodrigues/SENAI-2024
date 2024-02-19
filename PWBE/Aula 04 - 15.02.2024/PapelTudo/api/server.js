// Dependências
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const  app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

// Testando a aplicação na porta 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("Respondendo na porta 3000!");
});

