import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allInfoProducts } from '../../../redux/product/product-selectors'
import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem'
import styles from './DiaryProductsList.module.css'
import { dateEatenProduct } from '../../../redux/product/product-operations'

export default function DiaryProductsList() {
  const productsInfo = useSelector(allInfoProducts)
  console.log('DiaryProductsList -> productsInfo', productsInfo)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(dateEatenProduct(productsInfo.data.products))
  // }, [dispatch])

  return (
    <>
      <div className={styles.container}>
        {productsInfo?.data?.products ? (
          <ul className={styles.list}>
            {productsInfo?.data?.products.map(({ id, ...props }) => (
              <DiaryProductsListItem key={id} id={id} {...props} />
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
