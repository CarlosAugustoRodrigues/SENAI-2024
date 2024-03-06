const con = require('../connect/connect').con;

const create = (req, res) => {
    let {placa, modelo, capacidade} = req.body;

    con.query('INSERT INTO Veiculo (placa, modelo, capacidade) VALUES (?, ?, ?)', [placa, modelo, capacidade], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Veiculo', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const update = (req, res) => {
    const {id} = req.params;
    const {placa, modelo, capaidade} = req.body;

    con.query('UPDATE Veiculo SET placa = ?, modelo = ?, capacidade = ? WHERE id = ?', [placa, modelo, capaidade, id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const del = (req, res) => {
    const {id} = req.params;

    con.query('DELETE FROM Veiculo WHERE id = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

module.exports = {
    create,
    read,
    update,
    del
}