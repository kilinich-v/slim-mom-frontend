import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../../redux/product/product-operations'
import { dateEatenProducts } from '../../../redux/product/product-selectors'
import { dateEatenProduct } from '../../../redux/product/product-operations'
import styles from './DiaryProductListItem.module.css'

export default function DiaryProductsListItem({ title, weight, kcal, id }) {
  const dispatch = useDispatch()
  const calories = kcal
  const dateEatenProductsInfo = useSelector(dateEatenProducts)
  const currentDate = new Date().toLocaleDateString('fr-CA')

  const onDeleteProduct = () => {
    dispatch(deleteProduct(id))
    dispatch(dateEatenProduct(currentDate))
  }

  return (
    <li className={styles.product_Item}>
      <span className={styles.product_name}>{title}</span>
      <span className={styles.product_weight}>{weight} г</span>
      <span className={styles.product_kCal}>{calories} ккал</span>
      <button
        className={
          currentDate === dateEatenProductsInfo
            ? styles.product_button
            : styles.product_button_dis
        }
        type="button"
        onClick={() => onDeleteProduct({ id })}
      ></button>
    </li>
  )
}
