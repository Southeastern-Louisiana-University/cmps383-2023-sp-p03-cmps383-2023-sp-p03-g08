import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import barcode from "./barcode.jpg";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import Container from "react-bootstrap/Container";

function GetTickets({userId}) {
    const [tickets, setTicket] = useState();
    useEffect(() => {
        axios.get(`api/tickets/${userId}`).then((response) => {
            setTicket(response.data);
            console.log(response.data);
        }).catch((err) => {console.log(err)})
    }, [userId])
    return (
        <>
        <Container className="d-flex justify-content-center">
        {tickets ? (
            tickets.map((ticket) => {
                return (
                    <Card style={{ width: '20rem', padding: '10px'}}>
                    <Card.Header>Ticket Details</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            From: {ticket.departLocation} - {ticket.departDate}<br/>
                            To: {ticket.arrivalLocation} - {ticket.arrivalDate}<br/>
                            Train: Siemens Charger<br/>
                            Seat: {ticket.seatType}<br/>
                            ${ticket.price}<br/>
                            <img src={barcode} alt="ticket" width="125px" height="70px" style={{margin: '10px'}}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
                )
            })
        ) : (<Loading/>) }
        </Container>
        </>
    );
}

export default GetTickets;