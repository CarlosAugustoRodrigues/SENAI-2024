const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CREATE
const create = async (req, res) => {
    const data = req.body;
    const telefone = await prisma.telefones.create({
        data
    })

    res.status(201).json(telefone).end();
};

// READ
const read = async (req, res) => {
    const telefone = await prisma.telefones.findMany()

    res.status(200).json(telefone).end();
};

// UPDATE
const update = async (req, res) => {
    const data = req.body;
    const telefone = await prisma.telefones.update({
        where: { id: Number(req.params.id) }, data
    });

    res.status(200).json(telefone).end();
}

// DELETE
const del = async (req, res) => {
    const telefone = await prisma.telefones.delete({
        where: { id: Number(req.params.id) }
    });

    res.status(200).json(telefone).end();
};

module.exports = {
    create,
    read,
    update,
    del
}