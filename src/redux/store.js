import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import calcData from './calculator/calculator-reducer'
import userReducer from './registration/UserSlice'
import productReducer from './product/product-redusers'
// import axios from 'axios'

// const token = localStorage.getItem('token')
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDA3YTI0M2VkNDFkMjg4YzljYmZkOCIsImlhdCI6MTYyNzgyNzUxMCwiZXhwIjoxNjI4MTg3NTEwfQ.DXLF17Nku5_flCwPQmbRGOnS-zMQe53u02GZdpKOyi8`
// axios.defaults.baseURL = 'https://slim-mom-backend.herokuapp.com'
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]
const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
}

const rootReducer = combineReducers({
  kcal: calcData,
  user: userReducer,
  products: productReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
})

export const persistor = persistStore(store)
