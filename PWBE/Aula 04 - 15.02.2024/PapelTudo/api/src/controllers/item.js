// Conexão com o banco de dados
const con = require('../connect/connect');

// CRUD - CREATE
const create = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;

    let query = `INSERT INTO item(id, nome, descricao, valor) VALUE ('${id}', '${nome}', '${descricao}', '${valor}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json(err).end();
        } else {
            const novo = req.body;
            novo.id = result.insertId;
            res.status(201).json(novo).end();
        }
    });
}

// CRUD - READ
const read = (req, res) => {
    con.query('SELECT * FROM item', (err, result) => {
        err ? res.json(err) : res.json(result);
    });
}

//CRUD - UPDATE
const update = (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;

    let query = `UPDATE item SET nome = '${nome}', descricao = '${descricao}', valor = '${valor}', WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json(err).end();
        } else {
            result.affectedRows > 0 ? res.status(201).json(result).end() : res.status(404).json('⚠ Item não encontrado!').end();
        }
    });
}

//CRUD - DELETE
const del = (req, res) => {
    let id = req.params.id;

    con.query(`DELETE FROM item WHERE id = ${id}`, (err, result) => {
        if(err) {
            res.status(400).json(err).end();
        } else {
            result.affectedRows > 0 ? res.status(400).json(result).end() : res.status(404).json('⚠ Item não encontrado!').end();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
}
