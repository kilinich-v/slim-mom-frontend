import { createReducer } from '@reduxjs/toolkit'
import {
  calcRequest,
  calcSuccess,
  calcError,
} from '../calculator/calculator-action'

const loading = createReducer(false, {
  [calcRequest]: () => true,
  [calcSuccess]: () => false,
  [calcError]: () => false,
})

export default loading
