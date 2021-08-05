import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useWindowWidth } from '@react-hook/window-size'
import { toast } from 'react-toastify'
import debounce from 'lodash.debounce'
import styles from './DiaryAddProductForm.module.css'
import MainButton from '../../common/MainButton'
import {
  getProducts,
  addProduct,
} from '../../../redux/product/product-operations'
import 'react-toastify/dist/ReactToastify.css'
import { dateEatenProduct } from '../../../redux/product/product-operations'
import { useSelector } from 'react-redux'
import { dateEatenProducts } from '../../../redux/product/product-selectors'

export default function DiaryAddProductForm() {
  const [productName, setProductName] = useState('')
  const [productWeight, setProductWeight] = useState('')
  const [productCkal, setProductCkal] = useState('')
  const [debouncedProduct, setDebouncedProduct] = useState([])
  const dispatch = useDispatch()

  const date = useSelector(dateEatenProducts)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    debounce(() => {
      productName.length >= 3 &&
        getProducts(productName).then(products => {
          setDebouncedProduct(products)
        })
    }, 500),
    [productName],
  )
  const handleSearchProduct = event => {
    const { value } = event.target
    setProductName(value)
    if (!debouncedProduct) {
      return null
    }
    const foundArrayCkal = debouncedProduct?.find(el => el.title === value)
    const foundCkal = foundArrayCkal?.kcal
    setProductCkal(foundCkal)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeWeight = useCallback(event => {
    const { value } = event.target
    if (value > 5000) {
      const notify = () => toast.warn(`Введите корректный вес`)
      setProductWeight('')
      return notify()
    }
    setProductWeight(Number(value))
  })

  const handleSubmit = event => {
    event.preventDefault()
    if (debouncedProduct.length === 0) {
      const notify = () =>
        toast.warn(`Продукт не найден или выберете продукт из списка`)
      setProductName('')
      return notify()
    }
    const searchProduct = debouncedProduct?.find(el => el.title === productName)

    if (!searchProduct) {
      const notify = () => toast.warn(`Выберете продукт из списка`)
      setProductName('')
      return notify()
    }
    dispatch(dateEatenProduct(date))
    dispatch(
      addProduct({
        kcal: Number(productCkal),
        weight: Number(productWeight),
        title: productName,
      }),
    )
    dispatch(dateEatenProduct(date))

    clear()
  }
  const clear = () => {
    setProductName('')
    setProductWeight('')
  }

  const onlyWidth = useWindowWidth()
  return (
    <>
      <form
        className={onlyWidth >= 768 ? styles.form : styles.form_Mobile}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          list="cookies"
          name="product"
          value={productName}
          placeholder="Введите название продукта"
          type="text"
          autoComplete="off"
          onChange={handleSearchProduct}
          required
        />

        {debouncedProduct?.length > 0 && (
          <datalist id="cookies">
            {debouncedProduct.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </datalist>
        )}
        <input
          className={styles.input}
          name="weight"
          value={productWeight}
          placeholder="Граммы"
          type="number"
          min="0"
          onChange={handleChangeWeight}
          required
        />
        {onlyWidth >= 768 ? (
          <button type="submit" className={styles.btn}></button>
        ) : (
          ''
        )}
        {onlyWidth < 768 ? (
          <MainButton type="submit" className={styles.btn_Add}>
            Добавить
          </MainButton>
        ) : (
          ''
        )}
      </form>
    </>
  )
}
