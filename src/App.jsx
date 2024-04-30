import React from 'react'
import Navbar from './components/Navbar';
import { Routes , Route} from 'react-router-dom';

import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App