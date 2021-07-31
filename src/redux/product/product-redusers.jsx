import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import productActions from './product-actions'

const productsInfo = createReducer([], {
  [productActions.getProductSuccess]: (_, { payload }) => payload,
  [productActions.addProductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  // {
  //   console.log('payload', payload)
  // },

  [productActions.dateEatenProductsSuccess]: (_, { payload }) => payload,
  [productActions.deleteProductIdSuccess]: (state, { payload }) => {
    // console.log('payload', payload)

    const newState = state.products.filter(product => product.id !== payload)
    // console.log('newState', newState)
    return newState
  },
})

const loading = createReducer(false, {
  [productActions.getProductRequest]: () => true,
  [productActions.getProductSuccess]: () => false,
  [productActions.getProductError]: () => false,
  [productActions.addProductRequest]: (state, action) => true,
  [productActions.addProductSuccess]: (state, action) => false,
  [productActions.addProductError]: (state, action) => false,
})

const error = createReducer(null, {
  [productActions.deleteProductIdError]: (_, { payload }) => payload,
})

export default combineReducers({
  products: productsInfo,
  loading,
  error,
})
