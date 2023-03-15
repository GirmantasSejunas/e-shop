import React from 'react'

export const Products = (props) => {
    const { id, productName, price, productImage} = props.data


  return (
    <div className='product'>
        <img alt='#' src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <butto className='addToCartBttn'>Add to cart</butto>
    </div>
  )
}
