const { Router } = require("express");
const {getIngredientesService, postIngredientesService, getIngredienteService, updateDateIngredienteService, deleteIngredienteSerivce} = require('../servicios/ingredientes.service')

const routerIngredientes = Router()

routerIngredientes.get('/ingredientes', async (req,res)=>{
    try{
        const ingredientes = await getIngredientesService()
        res.status(200).json(ingredientes);
    }catch(error){
        res.status(500).json("ERROR")
    }
})

routerIngredientes.post('/ingredientes', async (req,res)=>{
    try{
        const datos = req.body
        console.log(datos)
        const respuesta = await postIngredientesService(datos)
        res.status(201).json(respuesta);
    }catch(error){
        console.log(error)
        res.status(500).json("ERROR")
    }
})

routerIngredientes.get('/ingredientes/:id', async (req,res)=>{
    try{
        console.log(req.params.id)
        const ingrediente = await getIngredienteService(parseInt(req.params.id))
        res.status(200).json(ingrediente)
    }catch(error){
        console.log(error);
        res.status(500).json("No existe tal id")
    }

})

routerIngredientes.put('/ingredientes/:id', async (req, res)=>{
    try{
        const id = parseInt(req.params.id)
        const datos = req.body
        const respuesta = await updateDateIngredienteService(id,datos)
        res.status(200).json(respuesta)
    }catch(error){
        console.log(error);
        res.status(500).json("ERROR")
    }
})

routerIngredientes.delete('/ingredientes/:id', async (req, res)=>{
    try{
        const id = parseInt(req.params.id)
        const respuesta = await deleteIngredienteSerivce(id)
        res.status(200).json(respuesta)
    }catch(error){
        console.log(error);
        res.status(500).json("ERROR")
    }
})




module.exports = routerIngredientes