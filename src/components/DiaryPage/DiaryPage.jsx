import { calcDataPrivate } from '../../redux/calculator/calculator-operations'
import { useEffect } from 'react'

import { useWindowWidth } from '@react-hook/window-size'
import { useDispatch, useSelector } from 'react-redux'
import DiaryProductsList from './DiaryProductsList/DiaryProductsList'
import DiaryDateСalendar from './DiaryDateСalendar/DiaryDateСalendar'
import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm'
import ModalDiaryAddProductForm from './ModalDiaryAddProductForm/ModalDiaryAddProductForm'
import { dateEatenProducts } from '../../redux/product/product-selectors'

import styles from './DiaryPage.module.css'
export default function DiaryPage() {
  // TODO new code
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const dataUser = localStorage.getItem('calcFormParams')
  useEffect(() => {
    if (!dataUser) {
      return
    }
    dispatch(calcDataPrivate(JSON.parse(dataUser), token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onlyWidth = useWindowWidth()
  const dateEatenProductsInfo = useSelector(dateEatenProducts)
  const currentDate = new Date().toLocaleDateString('fr-CA')
  return (
    <>
      {onlyWidth >= 768 ? (
        <div className={styles.container_page}>
          <DiaryDateСalendar />
          {currentDate === dateEatenProductsInfo ? (
            <DiaryAddProductForm />
          ) : null}

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
