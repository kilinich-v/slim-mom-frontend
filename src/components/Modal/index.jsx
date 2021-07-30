import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Loader from '../Loader'
import MainButton from '../common/MainButton';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { getKcalLoading } from '../../redux/loader/loader-selectors';
import styles from './styles.module.scss';

import { getKcalAmount } from '../../redux/calculator/calculator-selectors'
import { getProducts } from '../../redux/calculator/calculator-selectors'


const MainModal = () => {
  const [open, setOpen] = useState(false);
  const isLoading = useSelector(getKcalLoading);
  const amount = useSelector(getKcalAmount);
  const products = useSelector(getProducts)

  useEffect(() => {
    if (amount) {
       setOpen(true);
    }
  },[amount]);

  const handleClose = () => {
    setOpen(false);
  };


  const modalBody = (
    <div className={styles.modalContainer}>
      {/* <button className="modalContainer_closeBtn" type="button" onClick={handleClose}> 
        {document.documentElement.clientWidth > 767 ? <CloseIcon/> : <KeyboardReturnIcon/>}
      </button> */}

      <button className={styles.modalContainer_closeBtn} type="button" onClick={handleClose}> 
        <CloseIcon/>
      </button>

      <button className={styles.modalContainer_backBtn} type="button" onClick={handleClose}> 
        <KeyboardReturnIcon style={{ fontSize: 'inherit', paddingTop: 17, paddingBottom: 16, paddingLeft:15}}/>
      </button>

      <h3 className={styles.modalContainer_title}> Ваша рекомендуемая суточная норма калорий составляет </h3>
      <div className={styles.modalContainer_info}>
        <p className={styles.modalContainer_amount}>{amount}<span className={styles.modalContainer_amount_word}>ккал</span> </p>
          <h4 className={styles.modalList_title}>Продукты, которые вам <br/> не рекомендуется употреблять</h4>
          <ol className={styles.modalList}>
          {products && products.map(product => (
                <li>{product}</li>
              ))}
          </ol>
      </div>
    <MainButton type="button">Начать &#160; <span className={styles.btn_word}>худеть</span></MainButton>
</div>
  );

  return (
    <div>
      {/* <MainButton id={styles.openModal_btn} type="submit" >Похудеть</MainButton> */}
      <Modal
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
      >
        {isLoading ? <Loader/> :  modalBody}
        {/* {modalBody} */}
      </Modal>
    </div>
  );
}

export default MainModal;