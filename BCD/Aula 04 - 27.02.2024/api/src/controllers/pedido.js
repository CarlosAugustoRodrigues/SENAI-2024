const con = require('../connect/connect').con;

const create = (req, res) => {
    let {cliente_id, entrega_id, data, valor} = req.body

    con.query('INSERT INTO Pedido (cliente_id, entrega_id, data, valor) VALUES(?, ?, ?, ?)', [cliente_id, entrega_id, data, valor], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Pedido', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const update = (req, res) => {
    const {id} = req.params;
    const {cliente_id, entrega_id, data, valor} = req.body;

    con.query('UPDATE Pedido SET cliente_id = ?, entrega_id = ?, data = ?, valor = ? WHERE id = ?', [cliente_id, entrega_id, data, valor, id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const del = (req, res) => {
    const {id} = req.params;

    con.query('DELETE FROM Pedido WHERE id = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

module.exports = {
    create,
    read,
    update,
    del
}