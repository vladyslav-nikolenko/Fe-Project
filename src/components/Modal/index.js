import {  useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalWindow } from './index.styles';

const modalRoot = document.querySelector('#modal-root');
const html = document.querySelector('html');

function Modal({ onClose, children }) {

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    html.classList.add('disable-scroll');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      html.classList.remove('disable-scroll');
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        { children }
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}


export default Modal;
