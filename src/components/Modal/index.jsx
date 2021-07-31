import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import Loader from '../common/Loader'
import MainButton from '../common/MainButton'
import { getKcalLoading } from '../../redux/loader/loader-selectors'
import {
  getKcalAmount,
  getProducts,
} from '../../redux/calculator/calculator-selectors'
import { getIsLoggedOn } from '../../redux/registration/Selectors'
import routes from '../../routes'
import styles from './styles.module.scss'

const MainModal = () => {
  const [open, setOpen] = useState(false)
  const isLoading = useSelector(getKcalLoading)
  const amount = useSelector(getKcalAmount)
  const products = useSelector(getProducts)
  const isLogged = useSelector(getIsLoggedOn)

  useEffect(() => {
    console.log(amount)
    if (amount !== null) {
      setOpen(true)
    }
  }, [amount])

  const handleClose = () => {
    setOpen(false)
  }

  const modalBody = (
    <div className={styles.modalContainer}>
      <button
        className={styles.modalContainer_closeBtn}
        type="button"
        onClick={handleClose}
      >
        <CloseIcon />
      </button>
      <button
        className={styles.modalContainer_backBtn}
        type="button"
        onClick={handleClose}
      >
        <KeyboardReturnIcon style={{ fontSize: 'inherit', marginLeft: 15 }} />
      </button>

      <h3 className={styles.modalContainer_title}>
        {' '}
        Ваша рекомендуемая суточная норма калорий составляет{' '}
      </h3>
      <div className={styles.modalContainer_info}>
        <p className={styles.modalContainer_amount}>
          {amount}{' '}
          <span className={styles.modalContainer_amount_word}>ккал</span>{' '}
        </p>
        <h4 className={styles.modalList_title}>
          Продукты, которые вам <br /> не рекомендуется употреблять
        </h4>
        <ol className={styles.modalList}>
          {products &&
            products.map(product => <li key={product}>{product}</li>)}
        </ol>
      </div>
      <NavLink
        to={isLogged ? routes.diary : routes.reg}
        style={{ textDecoration: 'none' }}
      >
        <MainButton type="button">
          Начать &#160; <span className={styles.btn_word}>худеть</span>
        </MainButton>
      </NavLink>
    </div>
  )

  return (
    <div>
      <MainButton id={styles.openModal_btn} type="submit">
        Похудеть
      </MainButton>
      {isLoading ? (
        <Loader />
      ) : (
        <Modal
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={open}
        >
          {modalBody}
        </Modal>
      )}
    </div>
  )
}

export default MainModal
