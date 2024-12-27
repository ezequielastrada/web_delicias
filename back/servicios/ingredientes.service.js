const {getIngredientes,postIngrediente , getIngredienteById, updateIngrediente, deleteIngrdiente} = require('../repositorio/ingredientes.repositorio')
const formatDate = require('../varios/formatDate')
const convertirCantidadANumero = require('../varios/form')


const getIngredientesService = async () => {

    const ingredientes = await getIngredientes()

    const productosConFechaFormateada = ingredientes.map(producto => ({
        ...producto,
        updatedAt: formatDate(producto.updatedAt)
    }));

    return productosConFechaFormateada;
}

const postIngredientesService = async (datos) => {
    console.log('datos',datos)
    const formateado = convertirCantidadANumero(datos)
    console.log('formateado',formateado)
    
    const ingrediente = await postIngrediente(formateado)
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
