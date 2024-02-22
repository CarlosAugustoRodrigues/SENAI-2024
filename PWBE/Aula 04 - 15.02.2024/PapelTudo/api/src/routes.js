// Dependências
const express = require('express');
const router = express.Router();
const item = require('./controllers/item');

const test = (req, res) => {
    res.send('Back-End Respondendo!')
};

router.get('/', test);
router.post('/item', item.create);
router.get('/item', item.read);
router.put("/item/:id", item.update);
router.delete('/item/:id', item.del);

module.exports = router;