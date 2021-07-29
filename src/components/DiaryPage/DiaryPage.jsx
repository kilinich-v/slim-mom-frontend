import { useWindowWidth } from '@react-hook/window-size'
import DiaryProductsList from './DiaryProductsList/DiaryProductsList'
import DiaryDateСalendar from './DiaryDateСalendar/DiaryDateСalendar'
import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm'
import ModalDiaryAddProductForm from './ModalDiaryAddProductForm/ModalDiaryAddProductForm'

import styles from './DiaryPage.module.css'
export default function DiaryPage() {
  const onlyWidth = useWindowWidth()
  return (
    <>
      {onlyWidth >= 768 ? (
        <div className={styles.container_page}>
          <DiaryDateСalendar />
          <DiaryAddProductForm />
          <div className={styles.container_list}>
            <DiaryProductsList />
          </div>
        </div>
      ) : (
        <div className={styles.containerError}>
          <DiaryDateСalendar />
          <div>
            <DiaryProductsList />
          </div>
          {onlyWidth <= 768 ? (
            <ModalDiaryAddProductForm />
          ) : (
            <DiaryAddProductForm />
          )}
        </div>
      )}
    </>
  )
}
