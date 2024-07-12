import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      className="modal-custom"
      overlayClassName="overlay-custom"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;