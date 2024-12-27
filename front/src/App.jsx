import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import Ingredientes from './pages/Ingredientes'
import MisProductos from './pages/MisProductos'
import FormularioIngrediente from './componentes/FormularioIngrediente';

import './app.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <nav className='app__nav'>
        <Link to="/">Inicio</Link> | <Link to="/misproductos">Mis Productos</Link> | <Link to="/ingredientes">Materias Primas - Precios</Link>
      </nav>
      
      
      <div className='app__main'>
      <Routes >
        <Route path="/"             element={<Home />} />
        <Route path="/ingredientes" element={<Ingredientes />} />
        <Route path="/misproductos" element={<MisProductos />} />
        <Route path="/nuevo"        element={<FormularioIngrediente />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
