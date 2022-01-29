import { createSlice } from '@reduxjs/toolkit'


export const PRODUCTS = {
  GET_PRODUCTS: 'get_all_products',
  GET_PRODUCT_BY_ID: 'get_product_by_id',
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    cartItemsNumber: 0,
    reducers: {
      // crement: function(state,action){
      //   if(action.type === CART.DECREMENT_ITEMS){
      //     state.cartItemsNumber--
      //   }else if(action.type === CART.INCREMENT_ITEMS){
      //     state.cartItemsNumber++
      //   }
      //   else return state
      // }
      getProducts: function(state,action){
        
      }
    }
  }
})

// import {CART} from '../../../store/slice/cartSlice';

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer