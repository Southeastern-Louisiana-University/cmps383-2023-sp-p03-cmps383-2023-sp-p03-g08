import React, { useState, useContext } from "react";
import { Image } from "react-bootstrap";
import person from './person.svg'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
function NotSignedIn() {
    
    const toolTip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Guest: Not signed in
        </Tooltip>
    );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // @ts-ignore
    const { setAuth } = useContext(AuthContext);
    async function submitHandler(e) {
      e.preventDefault();
      
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(username, password);
        await axios.post("/api/authentication/login", {username, password})
        .then((response) => {console.log(response.data, response.status)})
        .catch((err) => {console.log(err)});
        setAuth({ username, password });
     
      
    }
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: '#e5cdfe'}}>
          <Modal.Title><h1>Sign In</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" name="username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="password"/>
                    </Form.Group>
                <div style={{textAlign: 'center'}}>
                  <Button variant="success" type="submit" onClick={handleClose}>Submit</Button>
                </div>
                </Form>
        </Modal.Body>
      </Modal>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={toolTip}>
          <Image src={person} onClick={handleShow} style={{cursor: 'pointer'}}/>
        </OverlayTrigger>
      </div>
    );
}

export default NotSignedIn;