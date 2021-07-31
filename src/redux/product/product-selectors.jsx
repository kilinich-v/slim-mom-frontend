import { createSelector } from '@reduxjs/toolkit'
export const allProducts = state => state.products.products.products
export const dateEatenProducts = state => state.products.products.date

export const { id } = state => state.products.products.products

// export const getVisibleProdact = createSelector(
//   [allProducts, deleteProductId],
//   products => {
//     return products.filter(product => product._id !== deleteProductId)
//   },
// )
