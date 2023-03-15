/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'
import { PRODUCTS } from '../../products'
import { CartItem } from './Cart-Item'
import { useNavigate } from 'react-router-dom'
import './cart.css'



export const Cart = () => {

  const { cartItems, getTotalAmount } = useContext(ShopContext)
  const totalAmount = getTotalAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your products</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      <div className='chechout'>
        <p> Total: $ {totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue shoping</button>
        <button>Buy</button>

      </div>

    </div>
  )
}
