// Dependências
const express = require('express');
const routes = express.Router();
const Item = require('./controllers/item');

const test = (res, req) => {
    res.json('Back-End Respondendo!')
};

routes.get('/', test);
routes.post('/item', Item.create);
routes.get('/item', Item.read);
routes.put("/itens/:id", Item.update);
routes.delete('/items/:id', Item.delete);

module.exports = routes;