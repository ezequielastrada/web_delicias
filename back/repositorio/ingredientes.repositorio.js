const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getIngredientes = async () => {
    const ingredientes = await prisma.ingrediente.findMany({
        orderBy: {
            nombre: 'desc' // o 'desc' para ordenar de forma descendente
        }
    })
    return ingredientes
}

const getIngredienteById = async (id) => {
    const ingrediente = await prisma.ingrediente.findUnique({
        where: {
            id: id
        }
    })
    return ingrediente
}

const postIngrediente = async (datos) => {
    const ingrediente = await prisma.ingrediente.create({
        data: datos
    })
    return ingrediente;
}

const updateIngrediente = async (id, datos) => {
    const ingrediente = await prisma.ingrediente.update({
        where: {
            id: id
        },
        data: datos
    })
    return ingrediente;

}

const deleteIngrdiente = async (id)=> {
    const respuesta = await prisma.ingrediente.delete({
        where: {
            id : id
        }
    })
    return respuesta;
}

module.exports = {getIngredientes,postIngrediente, getIngredienteById, updateIngrediente, deleteIngrdiente}