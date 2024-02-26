const con = require('../connect/connect').con;

const create = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;

    let query = `INSERT INTO item(id, nome, descricao, valor) VALUE ('${id}', '${nome}', '${descricao}', '${valor}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json({error: '⚠ Erro ao criar item!'}).end();
        } else {
            // const novo = req.body;
            // novo.id = result.insertId;
            res.status(201).json({success: 'Item criado com êxito!'}).end();
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
            res.status(400).json({error: '⚠ Erro ao atualizar item!'}).end();
        } else {
            result.affectedRows > 0 ? res.status(202).json({success: 'Item atualizado!'}).end() : res.status(400).json({error: '⚠️ Item não encontrado!'}).end();
        }
    });
};

const del = (req, res) => {
    const id = req.params.id;

    let query = `DELETE FROM item WHERE id='${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json({error: '⚠ Erro ao deleter o item!'}).end();
        } else {
            result.affectedRows > 0 ? res.status(202).json({success: 'Item excluido!'}).end() : res.json('⚠️ Item não encontrado!').end();
        }
    });
};

module.exports = {
    create,
    read,
    update,
    del
}