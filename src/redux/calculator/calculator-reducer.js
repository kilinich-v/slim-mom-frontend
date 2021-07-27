import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { calcRequest, calcSuccess, calcError } from './calculator-action'

const initialState = { kcal: null, productsNotRecommended: null }

const calcData = createReducer(initialState, {
  [calcSuccess]: (_, { payload }) => payload,
})

const error = createReducer(null, {
  [calcError]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
  [calcRequest]: () => true,
  [calcSuccess]: () => false,
  [calcError]: () => false,
})
export default combineReducers({ calcData, error, loading })
