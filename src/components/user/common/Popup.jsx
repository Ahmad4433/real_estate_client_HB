import React from "react";
import { Modal } from "react-bootstrap";
import useProvideState from "../../../hooks/useProvideState";
import { modalActions } from "../../../store/model-slice";
import { useLocation } from "react-router-dom";
const Popup = ({ open, component, title, path }) => {
  const { dispatch } = useProvideState();
  const location = useLocation();
  const closeModalHandler = () => {
    dispatch(modalActions.setIsOpen(false));
  };

  return (
    <Modal
      show={open && location.pathname === path}
      onHide={closeModalHandler}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{component}</Modal.Body>
    </Modal>
  );
};

export default Popup;
