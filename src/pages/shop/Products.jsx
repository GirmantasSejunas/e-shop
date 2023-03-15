import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'

export const Products = (props) => {
    const { id, productName, price, productImage} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]


  return (
    <div className='product'>
        <img alt='#' src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <butto className='addToCartBttn' onClick={() => {addToCart(id)}}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</> }</butto>
    </div>
  )
}
