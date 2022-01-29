import React from 'react'
import c from './CartItemsCounter.module.css'
import { useSelector } from 'react-redux'

const CartItemsCounter = () => {
  const counter = useSelector(state => state.cart.cartItemsNumber)
  return (
    <output name='items in cart' className={c.output}>
      {counter}
    </output>
  )
}

export default CartItemsCounter
