// Dependências
const express = require('express');
const router = express.Router();
const Item = require('./controllers/item');

const test = (res, req) => {
    res.json('Back-End Respondendo!')
};

router.get('/', test);
router.post('/item', Item.create);
router.get('/item', Item.read);
router.put("/itens/:id", Item.update);
router.delete('/items/:id', Item.delete);

module.exports = router;