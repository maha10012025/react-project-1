import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Product from './components/Product'
import Cart from './components/Cart'
import Navbar from './components/NavBar'
import NotFound from './NotFound'
function App() {


  return (
    <>

      <Navbar />

      <div className="container mt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    </>

  )

}

export default App