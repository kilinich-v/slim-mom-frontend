import productActions from './product-actions'
import axiosInstance from '../registration/AxiosInstance'

export const getProducts = query => {
  return axiosInstance
    .get(`/products/search?product=${query}`)
    .then(({ data }) => {
      return data
    })
    .catch(error => error)
}

export const addProduct =
  ({ title, weight, kcal }) =>
  dispatch => {
    const newProduct = {
      kcal,
      title,
      weight,
    }
    dispatch(productActions.addProductRequest())

    axiosInstance
      .post('/products', newProduct)
      .then(({ data }) => {
        dispatch(productActions.addProductSuccess(data))
      })
      .catch(error => dispatch(productActions.addProductError(error)))
  }
export const deleteProduct = id => dispatch => {
  dispatch(productActions.deleteProductIdRequest())

  axiosInstance
    .delete(`/products/${id}`)
    .then(() => dispatch(productActions.deleteProductIdSuccess(id)))
    .catch(error =>
      dispatch(productActions.deleteProductIdError(error.messages)),
    )
}
export const dateEatenProduct = date => dispatch => {
  dispatch(productActions.dateEatenProductsRequest())

  axiosInstance
    .get(`/products/${date}`)
    .then(responce => {
      dispatch(productActions.dateEatenProductsSuccess(responce.data))
    })
    .catch(error => dispatch(productActions.dateEatenProductsError(error)))
}
