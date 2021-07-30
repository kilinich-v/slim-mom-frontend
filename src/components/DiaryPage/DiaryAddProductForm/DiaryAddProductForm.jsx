import { useState, useEffect, useCallback } from 'react'
// import { useDispatch } from 'react-redux'
import { useWindowWidth } from '@react-hook/window-size'
import debounce from 'lodash.debounce'
import AsyncSelect from 'react-select/async'
import styles from './DiaryAddProductForm.module.css'
import MainButton from '../../common/MainButton'
import { getProducts } from '../../../redux/product/product-operations'

export default function DiaryAddProductForm() {
  const [product, setProduct] = useState('')
  const [weight, setWeight] = useState('')
  const [debouncedProduct, setDebouncedProduct] = useState('')
  // const dispatch = useDispatch()
  const handleSearchProduct = event => {
    const { value } = event.target
    setProduct(value)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    debounce(() => {
      product.length >= 3 &&
        getProducts(product).then(products => {
          setDebouncedProduct(products)
        })
    }, 500),
    [product],
  )

  // const handleChangeWeight = event => {
  //   const { value } = event.target
  //   setWeight(value)
  // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeWeight = useCallback(event => {
    const { value } = event.target
    setWeight(Number(value))
  })

  const handleSubmit = event => {
    event.preventDefault()

    clear()
  }

  const clear = () => {
    setProduct('')
    setWeight('')
  }
  const products = debouncedProduct
  const onlyWidth = useWindowWidth()
  return (
    <>
      <form
        className={onlyWidth >= 768 ? styles.form : styles.form_Mobile}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          name="product"
          value={product}
          placeholder="Введите название продукта"
          type="text"
          autoComplete="off"
          onChange={handleSearchProduct}
          required
        />
        {products.length > 0 && (
          <select className={styles.products_list} required>
            {products.map(({ _id, title }) => (
              <option
                key={_id}
                className={styles.options}
                value={title}
                onClick={e => {
                  setProduct(e.target.outerText)
                }}
              >
                {title}
              </option>
            ))}
          </select>
        )}
        <input
          className={styles.input}
          name="weight"
          value={weight}
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
