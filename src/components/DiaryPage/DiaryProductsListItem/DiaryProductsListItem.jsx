import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../redux/product/product-operations'
import styles from './DiaryProductListItem.module.css'
export default function ContactListItem({ title, weight, kcal, id }) {
  const dispatch = useDispatch()
  const calories = Math.round((kcal * weight) / 100)
  const onDeleteProduct = () => {
    dispatch(deleteProduct(id))
  }

  useEffect(() => {
    dispatch(deleteProduct())
  }, [dispatch])
  return (
    <li className={styles.product_Item}>
      <span className={styles.product_name}>{title}</span>
      <span className={styles.product_weight}>{weight} г</span>
      <span className={styles.product_kCal}>{calories} ккал</span>
      <button
        className={styles.product_button}
        type="button"
        onClick={onDeleteProduct}
      ></button>
    </li>
  )
}
