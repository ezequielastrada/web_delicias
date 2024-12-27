import './ingrediente.css'

function Ingrediente({ titulo, precio, comercio, fecha, cantidad, medida }) {
  return (
    <div className="main">
      <div className='linea1'>
        <div className='titulo'>{titulo}</div>
        <div className='precio'>${precio}</div>
      </div>
      <hr></hr>
      <div className='linea2'>
        <div className='comercio'>{comercio}</div>
        <div className='fecha'>{fecha}</div>
        <div className='medida'>x {cantidad}{medida}</div>
      </div>
    </div>
  );
}



export default Ingrediente