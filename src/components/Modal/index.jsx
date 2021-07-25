import React from 'react';
import Modal from '@material-ui/core/Modal';
import ColorButton from '../ColorButton';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const MainModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirect =()=>{
    // если залогинен - на дневник
    // если нет - регистрация
}

  const modalBody = (
    <div className="modalContainer">
    <button className="modalContainer_closeBtn" type="button" onClick={handleClose}> <CloseIcon/></button>
    <h3 className="modalContainer_title"> Ваша рекомендуемая суточная норма калорий составляет </h3>
    <div className="modalContainer_info">
        <p className="modalContainer_amount">--- ккал </p>
        <h4 className="modalList_title">Продукты, которые вам <br/> не рекомендуется употреблять</h4>
        <ol className="modalList">
            <li modalList_item> подгрузяться продукты</li>
        </ol>
    </div>
    <ColorButton type="button" onClick={handleRedirect}>Начать худеть</ColorButton>
</div>
  );

  return (
    <div>
      <ColorButton id="openModal_btn" type="submit" onClick={handleOpen}>Похудеть</ColorButton>
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