import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { allProducts } from '../../../redux/product/product-selectors'
import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem'
import styles from './DiaryProductsList.module.css'

export default function DiaryProductsList() {
  const productsInfo = useSelector(allProducts)
  // console.log('DiaryProductsList -> productsInfo', productsInfo)

  const [prod, setProd] = useState([])

  useEffect(() => {
    if (productsInfo) {
      setProd(productsInfo)
    }
  }, [productsInfo])
 
  // console.log('DiaryProductsList -> prod', prod)
  return (
    <>
      <div className={styles.container}>
        {prod?.length > 0 ? (
          <ul className={styles.list}>
            {prod.map(({ id, ...props }) => (
              <DiaryProductsListItem key={id} id={id} {...props} />
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )
}
