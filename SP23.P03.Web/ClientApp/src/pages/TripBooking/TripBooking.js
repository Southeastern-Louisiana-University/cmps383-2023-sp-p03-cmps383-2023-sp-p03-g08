import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import magglass from "./search.svg";
import SearchTrips from "./SearchTrips";
import {useState} from "react";
function Tickets() {
    const [searchtrips, setSearchTrips] = useState();
    async function getSearchTrips(e) {
        e.preventDefault();
        const departlocation = e.target.departlocation.value;
        const departdate = e.target.departdate.value;
        const departtime = e.target.departtime.value;
    
        const arrivallocation = e.target.arrivallocation.value;
        const arrivaldate = e.target.arrivaldate.value;
        const arrivaltime = e.target.arrivaltime.value;
      /*  alert("Start place is " + departlocation + ", depart date is " + departdate + ", depart time is " + departtime + "\nEnd place is " +
        arrivallocation + ", arrival date is " + arrivaldate + ", arrival time is " + arrivaltime);*/
    
        await axios.post("/api/trips/finddeparture", 
        {departlocation, departdate, departtime, arrivallocation, arrivaldate, arrivaltime})
        .then(function(response) {
            if (response.status === 200) {
                console.log("It's 200");
                console.log(response.data);
                setSearchTrips(response.data);
            }
        }).catch((err) => {console.log(err)});
    }
    return (
        <Container className="text-center">
            <h1 style={{padding: '15px'}}>Find A Train</h1>
            <Form onSubmit={getSearchTrips}>
            <Row>
                <Col>
                    <Card style={{padding: '15px'}}>
                        <Card.Title><h3>Going From...</h3></Card.Title>
                        <Card.Body>
                            <Row>
                                <Col>
                                <Form.Group>
                                    <Form.Label>Starting Location</Form.Label>
                                    <Form.Control type="text" placeholder="Enter state or station" name="departlocation"/>
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
                                    <Form.Control type="text" placeholder="Enter state or station" name="arrivallocation"/>
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
            <div>{searchtrips ? <SearchTrips searchtrips={searchtrips} /> : null}</div>
        </Container>
    );
}

export default Tickets;