import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

function tripStations(obj) {
    var ts = [];
    for (let i = 0; i < obj.length; i++) {
        ts.push(<ListGroup.Item>{obj[i].city + ", " + obj[i].state + ": " + obj[i].arrivalDate + ", " + obj[i].arrivalTime}</ListGroup.Item>)
    }
    return ts;
}
function GetTrips() {
    const [trips, setTrips] = useState();
    useEffect(() => {
        axios.get("api/trips").then((response) => {
            setTrips(response.data)
            console.log(response.data);
        }).catch((err) => {console.log(err)})
    }, [])
    return (
        <Container>
            {trips ? (
                trips.map((trip) => {
                    return (
                        <Card key={trip.id}>
                            <Card.Body>
                                <Card.Title>Travelling the {trip.routeName} Route </Card.Title>
                                <Card.Text className="text-start">
                                    <h4><i>Amenities/Seating Available:</i></h4>
                                    <Row>
                                        <Col>{trip.coachSeatsLeft > 0 && 
                                              <div><h5>Coach</h5>
                                                <Button>Book</Button>
                                              </div>}</Col>
                                        <Col>{trip.firstClassSeatsLeft > 0 && 
                                                <div><h5>First Class</h5>
                                                    <Button>Book</Button>
                                                </div>}</Col>
                                        <Col>{trip.sleepersLeft > 0 && 
                                                <div><h5>Sleeper</h5> 
                                                    <Button>Book</Button>
                                                </div>}</Col>
                                        <Col>{trip.roomletsLeft > 0 && 
                                                <div><h5>Roomlet</h5>
                                                    <Button>Book</Button>
                                                </div>}</Col>
                                        <Col>{trip.dining === 'true' && 
                                                <div><h5>Dining</h5></div>}</Col>
                                        <Col>
                                            <h4>Starting At</h4>
                                            <h2><Badge pill bg="info">${trip.coachPrice + trip.basePrice}</Badge></h2>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><h4>View Estimated Arrival Times</h4></Accordion.Header>
                                            <Accordion.Body>
                                            <ListGroup>
                                                {tripStations(trip.tripStations)}
                                            </ListGroup>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            ) :  (
                <Loading/>
            )}
        </Container>
    );
}

export default GetTrips;