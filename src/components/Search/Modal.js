import React from 'react';
import { createPortal } from 'react';
import * as Styled from './ModalStyles';

const Modal = (props) => {
  return createPortal(
    <>
      <Styled.Modal></Styled.Modal>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
