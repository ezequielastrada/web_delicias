const cors = require('cors')
const express = require('express');
const routerIngredientes = require('./rutas/ingredientes.rutas')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', routerIngredientes)

app.get('/api/v1/productos', async (req,res) => {
  const productos = await prisma.producto.findMany()
  res.json(productos);
})



app.get('/api/v1/productoIngrediente' , async (req,res)=>{
  const productoIngrediente = await prisma.productoIngrediente.findMany()
  res.json(productoIngrediente)
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});