import React, { useState } from "react";
import { Image } from "react-bootstrap";
import person from './person.svg'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NotSignedIn() {
    const toolTip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Guest: Not signed in
        </Tooltip>
    );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: '#e5cdfe'}}>
          <Modal.Title><h1>Sign In</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="success" onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={toolTip}>
          <Image src={person} onClick={handleShow} style={{cursor: 'pointer'}}/>
        </OverlayTrigger>
      </div>
    );
}

export default NotSignedIn;