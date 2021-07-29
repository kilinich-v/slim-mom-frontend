import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { allInfoProducts } from '../../../redux/product/product-selectors'
import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem'
import styles from './DiaryProductsList.module.css'

export default function DiaryProductsList() {
  const productsInfo = useSelector(allInfoProducts)

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
