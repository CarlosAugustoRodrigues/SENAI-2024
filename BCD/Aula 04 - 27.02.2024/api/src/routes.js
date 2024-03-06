const express = require('express');
const routes = express.Router();

const clientes = require('./controllers/clientes');
const entrega = require('./controllers/entrega');
const funcionario = require('./controllers/funcionario');
const pedido = require('./controllers/pedido');
const rotas = require('./controllers/rotas');
const veiculo = require('./controllers/veiculo');

const test = (req, res) => {
    res.send('Rotas Funfando!');
};

routes.get('/', test);

routes.post('/clientes', clientes.create);
routes.get("/clientes", clientes.read);
routes.put("/clientes/:id", clientes.update);
routes.delete("/clientes/:id", clientes.del);

routes.post('/entrega', entrega.create);
routes.get('/entrega', entrega.read);
routes.put('/entrega/:id', entrega.update);
routes.delete('/entrega/:id', entrega.del);

routes.post('/funcionario', funcionario.create);
routes.get('/funcionario', funcionario.read);
routes.put('/funcionario/:id', funcionario.update);
routes.delete('/funcionario/:id', funcionario.del);

routes.post('/pedido', pedido.create);
routes.get('/pedido', pedido.read);
routes.put('/pedido/:id', pedido.update);
routes.delete('/pedido/:id', pedido.del);

routes.post('/rotas', rotas.create);
routes.get('/rotas', rotas.read);
routes.put('/rotas/:id', rotas.update);
routes.delete('/rotas/:id', rotas.del);

routes.post('/veiculo', veiculo.create);
routes.get('/veiculo', veiculo.read);
routes.put('/veiculo/:id', veiculo.update);
routes.delete('/veiculo/:id', veiculo.del);

module.exports = routes;