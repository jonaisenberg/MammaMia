import { useState } from 'react'
import { UsePizza } from '../context/pizzaContext'

const Carrito = () => {
  const { carrito, formatoPrecio } = UsePizza()
  const [count, setCount] = useState(1)
  console.log(carrito)
  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>
        <h1>Detalle del pedido</h1>
      </div>
      {carrito.map((carrito) => (
        <div className='pizzaCarrito' key={`carrito-${carrito.id}`}>
          <div className='d-flex'>
            <img className='m-1' style={{ width: '60px' }} src={carrito.img} alt={carrito.name} />
            <p>{carrito.name.charAt(0).toUpperCase() + carrito.name.slice(1)}</p>
          </div>
          <div className='d-flex'>
            <p className='m-1'>$ {formatoPrecio(carrito.price)}.-</p>
            <button className='m-1' onClick={decrementar}>-</button>
            <p className='m-1'>{count}</p>
            <button className='m-1' onClick={incrementar}>+</button>
          </div>
        </div>
      ))}
    </>
  )
}
export default Carrito
