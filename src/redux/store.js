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

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]

// const rootReducer = combineReducers({
//   kcal: calcData,
//   user: userReducer,
//   products: productReducer,
// })

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    kcal: calcData,
    user: persistedReducer,
    products: productReducer,
  },
  middleware,
})

export const persistor = persistStore(store)
