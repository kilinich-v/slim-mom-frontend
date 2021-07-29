import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem'
import styles from './DiaryProductsList.module.css'

const products = [
  { name: 'Баклажан', id: 1, weight: 100, kCal: 320 },
  { name: 'Мясо птицы', id: 2, weight: 100, kCal: 480 },
  { name: 'Хлеб', id: 3, weight: 100, kCal: 210 },
  { name: 'Орех', id: 4, weight: 100, kCal: 205 },
  { name: 'Мясо свинное', id: 5, weight: 100, kCal: 580 },
  { name: 'Картофель', id: 6, weight: 100, kCal: 380 },
]
export default function DiaryProductsList({ day, toFetchProducts }) {
  return (
    <>
      <div className={styles.container}>
        {products ? (
          <ul className={styles.list}>
            {products.map(({ id, ...props }) => (
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
