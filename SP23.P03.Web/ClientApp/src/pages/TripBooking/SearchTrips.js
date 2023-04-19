
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
function SearchTrips({searchtrips}) {
    function tripStations(obj) {
        var ts = [];
        for (let i = 0; i < obj.length; i++) {
            ts.push(<ListGroup.Item>{obj[i].city + ", " + obj[i].state + ": " + obj[i].arrivalDate + ", " + obj[i].arrivalTime}</ListGroup.Item>)
        }
        return ts;
    }
    return (
        <Container>
            {searchtrips ? (
                searchtrips.map((searchtrip) => {
                    return (
                        <Card key={searchtrip.id}>
                            <Card.Body>
                                <Card.Title>Travelling the {searchtrip.routeName} Route </Card.Title>
                                <Card.Text className="text-start">
                                    <h4><i>Amenities/Seating Available:</i></h4>
                                    <Row>
                                        <Col>{searchtrip.coachSeatsLeft > 0 && 
                                              <div><h5>Coach</h5>
                                                <Button>Book</Button>
                                              </div>}</Col>
                                        <Col>{searchtrip.firstClassSeatsLeft > 0 && 
                                                <div><h5>First Class</h5>
                                                    <Button>Book</Button>
                                                </div>}</Col>
                                        <Col>{searchtrip.sleepersLeft > 0 && 
                                                <div><h5>Sleeper</h5> 
                                                    <Button>Book</Button>
                                                </div>}</Col>
                                        <Col>{searchtrip.roomletsLeft > 0 && 
                                                <div><h5>Roomlet</h5>
                                                    <Button>Book</Button>
                                                </div>}</Col>
                                        <Col>{searchtrip.dining === 'true' && 
                                                <div><h5>Dining</h5></div>}</Col>
                                        <Col>
                                            <h4>Starting At</h4>
                                            <h2><Badge pill bg="info">${searchtrip.coachPrice + searchtrip.basePrice}</Badge></h2>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><h4>View Estimated Arrival Times</h4></Accordion.Header>
                                            <Accordion.Body>
                                            <ListGroup>
                                                {tripStations(searchtrip.tripStations)}
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

export default SearchTrips