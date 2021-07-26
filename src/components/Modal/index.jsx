import React from 'react';
import Modal from '@material-ui/core/Modal';
import MainButton from '../common/MainButton';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import styles from './styles.module.scss';

const MainModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

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
        <KeyboardReturnIcon style={{marginLeft:'auto', fontSize: 'inherit', paddingTop: 17, paddingBottom: 16, paddingLeft:15}}/>
      </button>

      <h3 className={styles.modalContainer_title}> Ваша рекомендуемая суточная норма калорий составляет </h3>
      <div className={styles.modalContainer_info}>
          <p className={styles.modalContainer_amount}>--- ккал </p>
          <h4 className={styles.modalList_title}>Продукты, которые вам <br/> не рекомендуется употреблять</h4>
          <ol className={styles.modalList}>
              <li> подгрузяться продукты</li>
          </ol>
      </div>
    <MainButton type="button">Начать худеть</MainButton>
</div>
  );

  return (
    <div>
      <MainButton id={styles.openModal_btn} type="submit" onClick={handleOpen}>Похудеть</MainButton>
      <Modal
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
      >
        {modalBody}
      </Modal>
    </div>
  );
}

export default MainModal;