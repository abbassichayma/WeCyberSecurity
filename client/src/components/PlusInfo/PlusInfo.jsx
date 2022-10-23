import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
      <i className=" exclamation fas fa-question-circle" onClick={handleShow}></i>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Aide pour le numéro social</Modal.Title>
        </Modal.Header>
        <Modal.Body className='information'>
        Saisissez votre compte Email et votre mot de passe.<br></br>
          Saisissez votre numéro de sécurité sociale à 13 chiffres.<br></br>
        caractéres (disponible sur vos relevés de remboursement)<br></br>
        Exemple : 1480599999356 <br></br>
        Attention, si vous êtes ayant droit, saisissez le numéro de sécurité sociale de la personne à laquelle vous êtes rattaché.
            	
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} style={{background:"#2d5e84"}}>
            Ok
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example