const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CREATE
const create = async (req, res) => {
    const data = req.body;
    const hotel = await prisma.hoteis.create({
        data
    });

    res.status(201).json(hotel).end();
};

// READ
const read = async (req, res) => {
    const hotel = await prisma.hoteis.findMany();

    res.status(200).json(hotel).end();
};

// UPDATE
const update = async (req, res) => {
    const data = req.body;
    const hotel = await prisma.hoteis.update({
        where: { id: Number(req.params.id) }, data
    });

    res.status(200).json(hotel).end();
};

// DELETE
const del = async (req, res) => {
    const hotel = await prisma.hoteis.delete({
        where: { id: Number(req.params.id) }
    });

    res.status(200).json(hotel).end();
};

module.exports = {
    create,
    read,
    update,
    del
};