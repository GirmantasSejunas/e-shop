import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navBar.css'

const NavBar = () => {
  return (
    <div className='navbar' >
      <div className='form'>
      <Link to='/form' >Login/Register</Link>
      </div>
      <div className='links'>
        <Link to='/'>Shop</Link>
        <Link to='cart'>
          <ShoppingCart size={32} />
        </Link>

      </div>

    </div>
  )
}

export default NavBar