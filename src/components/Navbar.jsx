import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart}= useSelector((state)=>state);

  return (
    <div className=''>
      <nav className='flex flex-row justify-between items-center mx-60  h-24 bg-slate-900'>
      <NavLink to='/'>
      <img src='https://codehelp-shopping-cart.netlify.app/logo.png' alt='' className='h-20'/>

      </NavLink>
        <div className='flex justify-between ml-5 font-medium text-white items-center gap-10'>
        <NavLink to='/'>
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>

        </div>
      </nav>
    </div>
  )
}

export default Navbar