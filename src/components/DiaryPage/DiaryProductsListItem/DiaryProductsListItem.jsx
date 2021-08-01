import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { deleteProduct } from '../../../redux/product/product-operations'
import styles from './DiaryProductListItem.module.css'

export default function ContactListItem({ title, weight, kcal, id }) {
  const dispatch = useDispatch()
  const calories = Math.round((kcal * weight) / 100)
  const onDeleteProduct = () => {
    dispatch(deleteProduct(id))
  }
  const productLiId = uuidv4();
  return (
    <li className={styles.product_Item} key={productLiId}>
      <span className={styles.product_name}>{title}</span>
      <span className={styles.product_weight}>{weight} г</span>
      <span className={styles.product_kCal}>{calories} ккал</span>
      <button
        className={styles.product_button}
        type="button"
        onClick={() => onDeleteProduct({ id })}
      ></button>
    </li>
  )
}
