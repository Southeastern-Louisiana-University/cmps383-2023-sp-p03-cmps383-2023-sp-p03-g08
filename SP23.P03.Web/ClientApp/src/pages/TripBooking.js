import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
function Tickets() {
    return (
        <Container className="text-center">
            <h1>Trip Booking</h1>
            <Form>
            <Row>
                <Col>
                    <Card style={{padding: '15px'}}>
                        <Card.Title><h3>Going From...</h3></Card.Title>
                        <Card.Body>
                            <Form.Group>
                                <Row>
                                    <Col><Form.Control type="text" placeholder="Enter state or station"/></Col>
                                    <Col><Form.Control type="date" placeholder="Enter state or station"/></Col>
                                </Row>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{padding: '15px'}}>
                        <Card.Title><h3>To...</h3></Card.Title>
                        <Card.Body>
                            <Form.Group>
                                <Row>
                                    <Col><Form.Control type="text" placeholder="Enter state or station"/></Col>
                                    <Col><Form.Control type="date" placeholder="Enter state or station"/></Col>
                                </Row>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Form>
        </Container>
    );
}

export default Tickets;