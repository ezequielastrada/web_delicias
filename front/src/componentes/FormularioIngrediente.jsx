import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './formularioIngrediente.css';

function FormularioIngrediente() {

    const [formData, setFormData] = useState({ nombre: '', precioUnitario: '', comercio: '', cantidad: '', medida: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página
    try {
      const response = await fetch('https://webdelicias-production.up.railway.app/api/v1/ingredientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convierte el objeto a JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        navigate('/ingredientes');
      } else {
        console.error('Error en la solicitud:', response.status);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

    return (
      <div className='form__div'>
    
        <h1 className='form_h1'>Nuevo Ingrediente</h1>

        <form onSubmit={handleSubmit} className='form__form'>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Precio:
        <input
          type="number"
          name="precioUnitario"
          value={formData.precioUnitario}
          onChange={handleChange}
        />
      </label>
      <label>
        Comercio:
        <input
          type="text"
          name="comercio"
          value={formData.comercio}
          onChange={handleChange}
        />
      </label>
      <label>
        Cantidad:
        <input
          type="number"
          name="cantidad"
          value={formData.cantidad}
          onChange={handleChange}
        />
      </label>
      <label>
        Medida:
        <select
          name="medida"
          value={formData.medida}
          onChange={handleChange}
        
        >
          <option value="gr">Gr</option>
          <option value="unidades">Unidades</option>
        <option value="kg">Kg</option>
      </select>
      </label>
      <button type="submit">Enviar</button>
        </form>


      </div>
    );

}

export default FormularioIngrediente