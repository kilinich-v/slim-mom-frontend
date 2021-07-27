import styles from './DiaryProductListItem.module.css'
export default function ContactListItem({
  name,
  weight,
  kCal,
  onDeleteProduct,
  day,
}) {
  const calories = Math.round(kCal)
  return (
    <li className={styles.product_Item}>
      <span className={styles.product_name}>{name}</span>
      <span className={styles.product_weight}>{weight} г</span>
      <span className={styles.product_kCal}>{calories} ккал</span>
      <button
        className={styles.product_button}
        type="button"
        onClick={() => onDeleteProduct(day)}
      ></button>
    </li>
  )
}
