import React from 'react';
import { Overlay, ModalView } from './styled'
import PropTypes from 'prop-types'; 

export const Modal = ({ url, closeModal=()=>{} }) => {
  return (
    <Overlay>
      <ModalView onClick={closeModal}>
        <img src={url} alt="" />
      </ModalView>
    </Overlay>
  );
};

Modal.propTypes = {
    url: PropTypes.string,
    closeModal: PropTypes.func,
}