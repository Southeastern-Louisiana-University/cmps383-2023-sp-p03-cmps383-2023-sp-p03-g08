import React from "react";
import { Container } from "react-bootstrap";
import AuthService from "../../services/AuthService";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Placeholder from "../../components/Placeholder";
import profileperson from "./profileperson.svg";
import Card from "react-bootstrap/Card";
import ticket from "./ticket.svg";
import barcode from "./barcode.jpg";
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
                <Card style={{ width: '18rem', padding: '10px'}}>
                    <Card.Header>Ticket #57244</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Date Booked: 05/20/23<br/>
                            From: Hammond, LA - 05/30/23<br/>
                            To: Houston, TX - 05/30/23<br/>
                            Train: Siemens Charger #5<br/>
                            Seat: Coach<br/>
                            $150 <br/>
                            <img src={barcode} alt="ticket" width="125px" height="70px" style={{margin: '10px'}}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="danger" onClick={logOut} style={{marginTop: '20px'}}>Log Out</Button>
            </Card.Body>
        </Card>
      </div>
    );
}

export default Profile;