import axios from 'axios'
import productActions from './product-actions'

// const token = localStorage.getItem('token')

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDA3YTI0M2VkNDFkMjg4YzljYmZkOCIsImlhdCI6MTYyNzY0MzAxNSwiZXhwIjoxNjI4MDAzMDE1fQ.BN7rg4twxHkM-nTg8fGr7h8L9labbAz66X59kQFDBBM`
axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const getProducts = query => {
  return axios
    .get(`/products/search?product=${query}`)
    .then(({ data }) => {
      return data
    })
    .catch(error => error)
}

export const addProduct = (id, title, weight, kcal) => dispatch => {
  const newProduct = {
    id,
    title,
    weight,
    kcal,
  }
  dispatch(productActions.addProductRequest())

  axios
    .post('/products', newProduct)
    .then(({ data }) => dispatch(productActions.addProductSuccess(data)))
    .catch(error => dispatch(productActions.addProductError(error)))
}
export const deleteProduct = id => dispatch => {
  dispatch(productActions.deleteProductIdRequest())

  axios
    .delete(`/products/${id}`)
    .then(() => dispatch(productActions.deleteProductIdSuccess(id)))
    .catch(error =>
      dispatch(productActions.deleteProductIdError(error.messages)),
    )
}
export const dateEatenProduct = date => dispatch => {
  dispatch(productActions.dateEatenProductsRequest())

  axios
    .get(`/products/${date}`)
    .then(responce => {
      console.log('dateEatenProduct => responce ', responce)

      dispatch(productActions.dateEatenProductsSuccess(responce.data))
      console.log('responce.data', responce.data)
    })
    .catch(error => dispatch(productActions.dateEatenProductsError(error)))
}
