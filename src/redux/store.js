import { configureStore } from '@reduxjs/toolkit'
import calcData from './calculator/calculator-reducer'

const store = configureStore({
  reducer: {
    kcal: calcData,
  },
})

export default { store }
