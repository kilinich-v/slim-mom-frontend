import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useWindowWidth } from '@react-hook/window-size'
import debounce from 'lodash.debounce'
import styles from './DiaryAddProductForm.module.css'
import MainButton from '../../common/MainButton'
import {
  getProducts,
  addProduct,
} from '../../../redux/product/product-operations'

export default function DiaryAddProductForm() {
  const [productName, setProductName] = useState('')
  const [productWeight, setProductWeight] = useState('')
  const [debouncedProduct, setDebouncedProduct] = useState('')
  const dispatch = useDispatch()
  const handleSearchProduct = event => {
    const { value } = event.target
    setProductName(value)
  }
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeWeight = useCallback(event => {
    const { value } = event.target
    if (value > 5000) {
      alert(`Введите корректный вес`)
      setProductWeight('')
      return
    }
    setProductWeight(Number(value))
  })

  const handleSubmit = event => {
    event.preventDefault()

    if (productName !== debouncedProduct[0].title) {
      alert(`Выберете продукт из списка`)
      return
    }
    dispatch(
      addProduct({
        kcal: 100,
        weight: Number(productWeight),
        title: productName,
      }),
    )

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
          <datalist className={styles.products_datalist} id="cookies">
            {debouncedProduct.map(({ id, title }) => (
              <option className={styles.options} key={id} value={title}>
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
