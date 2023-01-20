import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalProduct = ( {open, onClose} ) => {

    if (!open) return null

    return (
    <Modal open={open} onHide={onClose}>
      <Modal.Dialog >

        <Modal.Header  closeButton  >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}

export default ModalProduct