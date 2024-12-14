const express = require('express');
const {PrismaClient} = require('@prisma/client')

const app = express();
const prisma = new PrismaClient()

app.use(express.json());

app.get('/api/v1/productos', async (req,res) => {
  const productos = await prisma.producto.findMany()
  res.json(productos);
})

app.get('/api/v1/ingredientes', async (req,res)=>{
  const ingredientes = await prisma.ingrediente.findMany()
  res.json(ingredientes);
})

app.get('/api/v1/productoIngrediente' , async (req,res)=>{
  const productoIngrediente = await prisma.productoIngrediente.findMany()
  res.json(productoIngrediente)
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});