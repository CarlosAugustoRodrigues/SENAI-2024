const con = require('../connect/connect').con;

const create = (req, res) => {
    let {origem, destino, distancia} = req.body;

    con.query('INSERT INTO Rota (origem, destino, distancia) VALUES (?, ?, ?)', [origem, destino, distancia], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Rota', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const update = (req, res) => {
    const {id} = req.params;
    const {origem, destino, distancia} = req.body;

    con.query('UPDATE Rota SET origem = ?, destino = ?, distancia = ? WHERE id = ?', [origem, destino, distancia, id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const del = (req, res) => {
    const {id} = req.params;

    con.query('DELETE FROM Rota WHERE id = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

module.exports = {
    create,
    read,
    update,
    del
}