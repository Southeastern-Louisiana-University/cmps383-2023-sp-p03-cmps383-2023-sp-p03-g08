import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
                                <Card.Title>Following Route {trip.routeId}</Card.Title>
                                <Card.Text className="text-start">
                                    <h4>Amenities/Seating Available:</h4>
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
                                    </Row><br/>
                                    <h4>Estimated Arrival Times: </h4>
                                    <ListGroup>
                                        {tripStations(trip.tripStations)}
                                    </ListGroup>
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