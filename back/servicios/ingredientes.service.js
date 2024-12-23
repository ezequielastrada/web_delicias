const {getIngredientes,postIngrediente , getIngredienteById, updateIngrediente, deleteIngrdiente} = require('../repositorio/ingredientes.repositorio')
const formatDate = require('../varios/formatDate')

const getIngredientesService = async () => {

    const ingredientes = await getIngredientes()

    const productosConFechaFormateada = ingredientes.map(producto => ({
        ...producto,
        updatedAt: formatDate(producto.updatedAt)
    }));

    return productosConFechaFormateada;
}

const postIngredientesService = async (datos) => {
    const ingrediente = await postIngrediente(datos)
    return ingrediente;
}

const getIngredienteService = async (id) => {
    const ingrediente = await getIngredienteById(id)
    return ingrediente
}

const updateDateIngredienteService = async (id, datos)=> {
    const respuesta = await updateIngrediente(id,datos)
    return respuesta

}

const deleteIngredienteSerivce = async(id)=> {
    const respuesta = await deleteIngrdiente(id)
    return respuesta
}


module.exports = {getIngredientesService, postIngredientesService, getIngredienteService, updateDateIngredienteService, deleteIngredienteSerivce};
