import { createSlice } from '@reduxjs/toolkit'


export const CART = {
  INCREMENT_ITEMS: 'increment_cartItemsNumber',
  DECREMENT_ITEMS: 'decrement_cartItemsNumber'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItemsNumber: 0,
    reducers: {
      crement: function(state,action){
        if(action.type === CART.DECREMENT_ITEMS){
          state.cartItemsNumber--
        }else if(action.type === CART.INCREMENT_ITEMS){
          state.cartItemsNumber++
        }
        else return state
      }
    }
  }
})

// import {CART} from '../../../store/slice/cartSlice';

export const { crement } = cartSlice.actions;

export default cartSlice.reducer