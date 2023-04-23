import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import AuthService from '../../services/AuthService';
import axios from "axios";

function BookingModal({deploc, depdate, arrloc, arrdate, searchtrip}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentUser = AuthService.getCurrentUser();
  async function buyTicket(e) {
    e.preventDefault();
    const tripid = searchtrip.id;
    const userid = currentUser.id;
    const price = searchtrip.coachPrice + searchtrip.basePrice;
    const seattype = "Coach";
    const departlocation = deploc;
    const departdate = depdate;
    const arrivallocation = arrloc;
    const arrivaldate = arrdate;
    await axios.post("api/tickets", {tripid, userid, price, seattype, departlocation, departdate, 
    arrivallocation, arrivaldate})
    .then(function(response) {
        if (response.status === 200) {
          console.log("It's 200");
          console.log(response.data);
        }
      })
      .catch((err) => {console.log(err)});
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Booking Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          From {deploc} on : {depdate}<br/>
          To {arrloc} on : {arrdate}<br/>
          Seat: Coach - ${searchtrip.coachPrice + searchtrip.basePrice}
          <Form onSubmit={buyTicket} style={{paddingTop: '15px'}}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Card Holder's Name</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" name="name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="password" placeholder="Enter Card Number" name="card"/>
                    </Form.Group>
                <div style={{textAlign: 'center'}}>
                  <Button variant="success" type="submit" onClick={handleClose}>Submit</Button>
                </div>
                </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default BookingModal;