const express = require('express');
const routes = express.Router();
const item = require('./controllers/item');

const test = (req, res) => {
    res.send('BackEnd Respondendo!')
}

// Rota de Teste
routes.get('/', test);

// Rotas dos itens
routes.post('/itens', item.create);
routes.get('/itens', item.read);
routes.put("/itens/:id", item.update);
routes.delete('/itens/:id', item.del);

module.exports = routes;