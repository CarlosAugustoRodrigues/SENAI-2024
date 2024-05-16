const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// CREATE
const create = async (req, res) => {
    const data = req.body;

    const cliente = await prisma.clientes.create({
        data
    });

    res.status(201).json(cliente).end();
};

// READ
const read = async (req, res) => {
    const cliente = await prisma.clientes.findMany();

    res.status(200).json(cliente).end();
};

// READ BY ID
const readById = async (req, res) => {
    const cliente = await prisma.clientes.findUnique({
        where: { id: Number(req.params.id) },
        include : { telefone: { select: { telefone: true } } }
    });

    res.status(200).json(cliente).end();
};

//READ BY NAME
const readByName = async (req, res) => {
    const { nome } = req.body;
    const cliente = await prisma.clientes.findMany({
        where: { nome: {
            contains: nome
            } 
        }
    });

    res.status(200).json(cliente).end();
};

// UPDATE
const update = async (req, res) => {
    const data = req.body;
    const cliente = await prisma.clientes.update({
        where: { id: Number(req.params.id) },
        data
    });

    res.status(200).json(cliente).end();
};

// DELETE
const del = async (req, res) => {

    const cliente = await prisma.clientes.delete({
        where: { id: Number(req.params.id) }
    });
    
    res.status(200).json(cliente).end();
};

module.exports = {
    create,
    read,
    readById,
    readByName,
    update,
    del
}