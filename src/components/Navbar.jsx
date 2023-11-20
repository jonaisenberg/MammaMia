import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/' end>
          🍕 Pizzería Mamma Mia!
        </NavLink>

        <NavLink to='/carrito'>
          🛒 $Carrito
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
