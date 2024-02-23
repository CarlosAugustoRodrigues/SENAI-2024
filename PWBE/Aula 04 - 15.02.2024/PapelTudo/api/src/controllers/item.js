const con = require('../connect/connect').con;

const create = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;

    let query = `INSERT INTO item(id, nome, descricao, valor) VALUE ('${id}', '${nome}', '${descricao}', '${valor}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.json(err).end();
        } else {
            const novo = req.body;
            novo.id = result.insertId;
            res.json(novo).end();
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM item', (err, result) => {
        err ? res.json(err) : res.json(result);
    });
};

const update = (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const valor = req.body.valor;

    let query = `UPDATE item SET nome = '${nome}', descricao = '${descricao}', valor = '${valor}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.json(err).end();
        } else {
            result.affectedRows > 0 ? res.json(result).end() : res.json('⚠️ Item não encontrado!').end();
        }
    });
};

const del = (req, res) => {
    const id = req.params.id;

    let query = `DELETE FROM item WHERE id='${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.json(err).end();
        } else {
            result.affectedRows > 0 ? res.json(result).end() : res.json('⚠️ Item não encontrado!').end();
        }
    });
};

module.exports = {
    create,
    read,
    update,
    del
}