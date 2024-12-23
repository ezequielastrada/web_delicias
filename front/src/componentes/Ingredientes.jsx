import DataTable from "react-data-table-component"
import { useEffect, useState } from "react"

function Tabla() {

    const [data, setData] = useState(null); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para el indicador de carga
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true); // Activar el indicador de carga
          setError(null); // Reiniciar errores
          try {
            const response = await fetch('http://localhost:3000/api/v1/ingredientes');
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`); // Manejar errores HTTP
            }
            const result = await response.json();
            setData(result); // Guardar los datos en el estado
          } catch (err) {
            setError(err.message); // Capturar errores
          } finally {
            setLoading(false); // Desactivar el indicador de carga
          }
        };
    
        fetchData();
      }, []); 
    
    const columns = [{
        name: "Producto",
        selector: row => row.nombre
    },{
        name: "Precio",
        selector: row => row.precioUnitario
    },{
        name: "Cant en grs",
        selector: row => row.cantidad
    },{
      name: "Fecha",
      selector: row => row.updatedAt
    }]

    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <DataTable
            columns={columns}
            data={data}
        />
    </div>
    
  )
}

export default Tabla