import React from 'react';
import { PropTypes } from 'prop-types';
import {
  ModalBackground, ModalContainer, ModalClose, ModalTitle,
} from
  '../../assets/modalStyles/modal';
import Form from './Form';

const Modal = ({ setIsModalOpen }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ModalBackground>
        <ModalContainer>
          <ModalTitle>
            <h2>Add project</h2>
            {' '}
            <ModalClose onClick={handleClose}>X</ModalClose>
          </ModalTitle>
          <Form />
        </ModalContainer>
      </ModalBackground>
    </div>
  );
};

Modal.propTypes = {
  setIsModalOpen: PropTypes.bool.isRequired,

};
export default Modal;
