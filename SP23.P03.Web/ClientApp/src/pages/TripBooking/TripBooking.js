import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import magglass from "./search.svg";
function handler(e) {
    e.preventDefault();
    const start = e.target.start.value;
    const departdate = e.target.departdate.value;
    const departtime = e.target.departtime.value;

    const end = e.target.end.value;
    const arrivaldate = e.target.arrivaldate.value;
    const arrivaltime = e.target.arrivaltime.value;
    alert("Start place is" + start + ", depart date is " + departdate + ", depart time is " + departtime + "\nEnd place is" +
    end + ", arrival date is " + arrivaldate + ", arrival time is " + arrivaltime);
    
}
function Tickets() {
    return (
        <Container className="text-center">
            <h1 style={{padding: '15px'}}>Find A Train</h1>
            <Form onSubmit={handler}>
            <Row>
                <Col>
                    <Card style={{padding: '15px'}}>
                        <Card.Title><h3>Going From...</h3></Card.Title>
                        <Card.Body>
                            <Row>
                                <Col>
                                <Form.Group>
                                    <Form.Label>Starting Location</Form.Label>
                                    <Form.Control type="text" placeholder="Enter state or station" name="start"/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group>
                                    <Form.Label>Depart Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter state or station" name="departdate"/>
                                </Form.Group>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Depart Time</Form.Label>
                                    <Form.Control type="time" name="departtime"/>
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{padding: '15px'}}>
                        <Card.Title><h3>To...</h3></Card.Title>
                        <Card.Body>
                            <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Ending Location</Form.Label>
                                    <Form.Control type="text" placeholder="Enter state or station" name="end"/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group>
                                    <Form.Label>Arrival Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter state or station" name="arrivaldate"/>
                                </Form.Group>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Arrival Time</Form.Label>
                                    <Form.Control type="time" name="arrivaltime"/>
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Button type="submit" style={{margin: '15px'}} size="lg">
                <img src={magglass} alt="glass" style={{paddingRight: '10px'}}/>Search</Button>
            </Form>
        </Container>
    );
}

export default Tickets;