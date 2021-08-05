import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './ModalDiaryAddProductForm.module.css'
import Modal from '../Modal/Modal'
import DiaryAddProductForm from '../DiaryAddProductForm/DiaryAddProductForm'
import { dateEatenProducts } from '../../../redux/product/product-selectors'

const ModalDiaryAddProductForm = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }
  const dateEatenProductsInfo = useSelector(dateEatenProducts)
  const currentDate = new Date().toLocaleDateString('fr-CA')
  return (
    <>
      {currentDate === dateEatenProductsInfo ? (
        <button
          type="button"
          className={styles.btn}
          onClick={toggleModal}
        ></button>
      ) : null}

      <Modal arrowVisible toggleModal={toggleModal} openModal={openModal}>
        <DiaryAddProductForm toggleModal={toggleModal} />
      </Modal>
    </>
  )
}

export default ModalDiaryAddProductForm
