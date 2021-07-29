import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import productActions from './product-actions'

const products = createReducer([], {
  [productActions.getProductSuccess]: (_, { payload }) => payload,
  [productActions.addProductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [productActions.dateEatenProductsSuccess]: (_, { payload }) => payload,
  [productActions.deleteProductIdSuccess]: (state, { payload }) => {
    const newState = state.filter(product => product.id !== payload.id)
    return [...newState, payload]
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

const error = createReducer(null, {})

export default combineReducers({
  products,
  loading,
  error,
})
