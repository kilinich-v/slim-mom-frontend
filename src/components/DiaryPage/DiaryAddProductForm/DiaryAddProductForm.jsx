import { useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import styles from './DiaryAddProductForm.module.css'
import MainButton from '../../common/MainButton'

export default function DiaryAddProductForm() {
  const [product, setProduct] = useState('')
  const [weight, setWeight] = useState('')

  const handlechangeName = ({ value }) => setProduct(value)
  const handleChangeWeight = ({ value }) => setWeight(value)

  const handleSubmit = event => {
    event.preventDefault()
    clear()
  }
  const clear = () => {
    setProduct('')
    setWeight('')
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
          name="product"
          value={product}
          placeholder="Введите название продукта"
          type="text"
          autoComplete="off"
          onChange={handlechangeName}
          required
        ></input>
        <input
          className={styles.input}
          name="weight"
          value={product ? weight : ''}
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
