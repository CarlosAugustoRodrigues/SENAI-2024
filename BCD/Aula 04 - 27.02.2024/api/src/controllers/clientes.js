const con = require('../connect/connect').con;

const create = (req, res) => {
    let {nome, endereco, telefone, email} = req.body;
    
    let query = `INSERT INTO Clientes (nome, endereco, telefone, email) VALUE ('${nome}', '${endereco}', '${telefone}', '${email}')`;
    con.query(query, (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

const read = (req, res) => {
    con.query('SELECT * FROM Clientes', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

const update = (req, res) => {
    const {id} = req.params;
    const {nome, endereco, telefone, email} = req.body;

    con.query('UPDATE Clientes SET nome = ?, endereco = ?, telefone = ?, email = ? WHERE id = ?', [nome, endereco, telefone, email, id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

const del = (req, res) => {
    const {id} = req.params;

    con.query('DELETE FROM Clientes WHERE id = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

module.exports = {
    create,
    read,
    update,
    del
}