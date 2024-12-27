import { useEffect, useState } from 'react';
import Ingrediente from '../componentes/Ingrediente'
import BotonNew from '../componentes/BotonNew';

import { Link } from 'react-router-dom';


function Ingredientes() {

    const [ingredientes, setIngredientes] = useState([]);
    
      useEffect(() => {
        // Simulación de fetch
        const fetchDatos = async () => {
          const response = await fetch('http://localhost:3000/api/v1/ingredientes'); // Cambia por tu endpoint
          const data = await response.json();
          setIngredientes(data); // Suponemos que 'data' es un array
        };
        
        fetchDatos();
      }, []);

      useEffect(() => {
        console.log('Datos actualizados:', ingredientes);
      }, [ingredientes]);

  return (
    <div>
        {ingredientes.length > 0 ? (
        ingredientes.map((ingrediente, index) => (
          <Ingrediente
            key={ingrediente.id} // Usar un identificador único si es posible, como un ID
            titulo={ingrediente.nombre}
            precio={ingrediente.precioUnitario}
            comercio={ingrediente.comercio}
            fecha={ingrediente.updatedAt}
            cantidad={ingrediente.cantidad}
            medida={ingrediente.medida}
          />
        ))
      ) : (
        <p>Cargando ingredientes...</p>
      )}

      <Link to="/nuevo"><BotonNew /></Link>
      
    </div>
  )
}

export default Ingredientes