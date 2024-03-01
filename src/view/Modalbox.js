import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react'

const Modalbox = (props) => {
    const {handleClick,UpDataName}=props
    return (
        <Modal
            {...props}

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >              
                <Modal.Title id="contained-modal-title-vcenter">
                    <p>Add Task </p>
                </Modal.Title>
                <Button onClick={UpDataName}>UpDate Name</Button>
            </Modal.Header>
            <Modal.Body>
              {props.content()}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClick}>Add Task</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modalbox