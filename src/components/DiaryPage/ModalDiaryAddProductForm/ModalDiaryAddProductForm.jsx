import React, { useState } from 'react'
import styles from './ModalDiaryAddProductForm.module.css'
import Modal from '../Modal/Modal'
import DiaryAddProductForm from '../DiaryAddProductForm/DiaryAddProductForm'

const ModalDiaryAddProductForm = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <button
        type="button"
        className={styles.btn}
        onClick={toggleModal}
      ></button>
      <Modal arrowVisible toggleModal={toggleModal} openModal={openModal}>
        <DiaryAddProductForm toggleModal={toggleModal} />
      </Modal>
    </>
  )
}

export default ModalDiaryAddProductForm
