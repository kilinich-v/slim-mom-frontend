export const allProducts = state => state.products.diaryInfo.products
export const dateEatenProducts = state => state.products.diaryInfo.date
export const deprecatedProducts = state =>
  state.products.diaryInfo.productsNotRecommended
export const diaryInfo = state => state.products.diaryInfo
// export const dayInform = state => state.products.dayInfo
export const productLoading = state => state.products.loading
