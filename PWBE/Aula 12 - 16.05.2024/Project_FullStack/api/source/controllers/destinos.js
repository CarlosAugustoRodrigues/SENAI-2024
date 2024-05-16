const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CREATE
const create = async (req, res) => {
    const data = req.body;

    const destino = await prisma.destinos.create({
        data
    });

    res.status(201).json(destino).end();
};

// READ
const read = async (req, res) => {
    const destino = await prisma.destinos.findMany({
        include: { hoteis: true, pontos: true }
    })

    res.status(200).json(destino).end();
};

// UPDATE
const update = async (req, res) => {
    const data = req.body;
    const destino = await prisma.destinos.update({
        where: { id: Number(req.params.id) }, data
    });

    res.status(200).json(destino).end();
}

// DELETE
const del = async (req, res) => {
    const destino = await prisma.destinos.delete({
        where: { id: Number(req.params.id) }
    });

    res.status(200).json(destino).end();
}

module.exports = {
    create,
    read,
    update,
    del
}