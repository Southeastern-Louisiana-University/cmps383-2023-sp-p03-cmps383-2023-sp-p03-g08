import React from "react";
import { Container, ListGroupItem } from "react-bootstrap";
import AuthService from "../../services/AuthService";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Placeholder from "../../components/Placeholder";
import profileperson from "./profileperson.svg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ticket from "./ticket.svg";
function Profile() {
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();
    if (currentUser == null) {
        return (
            <Container className="text-center">
                <h2>You aren't logged in right now.</h2>
                <Placeholder />
            </Container>
        );
    }
    async function logOut() {
        localStorage.removeItem("user");
        navigate("/");
        window.location.reload();
        await axios.post("/api/authentication/logout")
        .then(function(response) {
          if (response.status === 200) {
                console.log("It's 200");
            //    localStorage.removeItem("user");
            //    navigate("/");
           //     window.location.reload()
                console.log(response.data);
            }
        })
        .catch((err) => {console.log(err)});
    }
    return (
      <div className="d-flex justify-content-center">
      <Card style={{ width: '40rem', margin: '25px', textAlign: 'center'}}>
            <Card.Header><b>Your Profile</b></Card.Header>
            <Card.Body>
                <img src={profileperson} alt="profileperson" style={{marginBottom: '20px'}}/>
                <Card.Title><h2>Greetings, {currentUser.userName}</h2></Card.Title>
                <h5>{currentUser.roles}</h5>
                <Card.Text>
                  <h5>
                    <img src={ticket} alt="ticket" style={{marginRight: '10px'}}/>
                    Your Booked Tickets
                  </h5> 
                </Card.Text>
                <ListGroup style={{textAlign: 'left'}}>
                    <ListGroupItem>Ticket</ListGroupItem>
                    <ListGroupItem>data</ListGroupItem>
                    <ListGroupItem>goes</ListGroupItem>
                    <ListGroupItem>here</ListGroupItem>
                </ListGroup>
                <Button variant="danger" onClick={logOut} style={{marginTop: '20px'}}>Log Out</Button>
            </Card.Body>
        </Card>
      </div>
    );
}

export default Profile;