const con = require('../connect/connect').con;

const create = (req, res) => {
    let {nome, cargo, salario} = req.body;

    con.query('INSERT INTO Funcionario (nome, cargo, salario) VALUES (?, ?, ?)', [nome, cargo, salario], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Funcionario', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const update = (req, res) => {
    const {id} = req.params;
    const {nome, cargo, salario} = req.body;

    con.query('UPDATE Funcionario SET nome = ?, cargo = ?, salario = ?', [nome, cargo, salario], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const del = (req, res) => {
    const {id} = req.params;

    con.query('DELETE FROM Funcionario WHERE id = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

module.exports = {
    create,
    read,
    update,
    del
}