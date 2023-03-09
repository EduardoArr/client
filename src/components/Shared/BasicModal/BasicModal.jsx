import React from "react";
import { Modal, ModalHeader } from "semantic-ui-react";

export const BasicModal = (props) => {
  const { show, close, title, size, children } = props;
  return (
    <Modal closeIcon open={show} onClose={close} size={size}>
      {title && <ModalHeader>{title}</ModalHeader>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

BasicModal.defaultProps = {
  size: "tiny",
};
