import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Carrito from './views/Carrito'
import Home from './views/Home'
import Pizza from './views/Pizza'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/pizza/:id'
          element={<Pizza />}
        />
        <Route
          path='/carrito'
          element={<Carrito />}
        />
      </Routes>
    </div>
  )
}

export default App
