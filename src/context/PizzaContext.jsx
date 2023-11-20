/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [pizzaSeleccionada, setPizzaSeleccionada] = useState(null)
  const [carrito, setCarrito] = useState([])

  const handleClickMas = (pizza) => {
    setPizzaSeleccionada(pizza)
  }

  const handleClick = (pizza) => {
    const pizzaEnCarrito = carrito.find((p) => p.id === pizza.id)
    if (!pizzaEnCarrito) {
      setCarrito([...carrito, pizza])
    } else {
      window.alert('¡La pizza ya está en el carrito!')
    }
  }

  const formatoPrecio = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch('/data/pizzas.json')
        const data = await response.json()
        setPizzas(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <PizzaContext.Provider value={{ pizzas, formatoPrecio, handleClick, pizzaSeleccionada, carrito, handleClickMas }}>
      {children}
    </PizzaContext.Provider>
  )
}
export default PizzaProvider

export function UsePizza () {
  return useContext(PizzaContext)
}
