import './Tarjeta.css'

function Tarjeta() {
  return (
    <div className="container">
      <div className="main">
        <h1 className="titulo">PREPIZA</h1>
        <span className="cantidad">12</span>
        <span className="precio">$1000</span>
        <div className='botones'>
          <button>✏️</button>
          <button>🗑️</button>
        </div>  
      </div>
      <div className="ingredientes">
        <table>
          <tr>
            <th>Ingredientes</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
          <tr>
            <td>Ajo</td>
            <td>100 gr</td>
            <td>$242</td>
          </tr>
          <tr>
            <td>Peregil</td>
            <td>10 Kg</td>
            <td>$23</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Tarjeta