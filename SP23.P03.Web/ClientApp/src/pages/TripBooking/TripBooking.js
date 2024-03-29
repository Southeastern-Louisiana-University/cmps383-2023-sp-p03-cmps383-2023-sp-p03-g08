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

    const [deploc, setDepLoc] = useState();
    const [depdate, setDepDate] = useState();
    const [arrloc, setArrLoc] = useState();
    const [arrdate, setArrDate] = useState();
    async function getSearchTrips(e) {
        e.preventDefault();
        const departlocation = e.target.departlocation.value;
        const departdate = e.target.departdate.value;
    
        const arrivallocation = e.target.arrivallocation.value;
        const arrivaldate = e.target.arrivaldate.value;
      /*  alert("Start place is " + departlocation + ", depart date is " + departdate + ", depart time is " + departtime + "\nEnd place is " +
        arrivallocation + ", arrival date is " + arrivaldate + ", arrival time is " + arrivaltime);*/
    
        await axios.post("/api/trips/finddeparture", 
        {departlocation, departdate, arrivallocation, arrivaldate})
        .then(function(response) {
            if (response.status === 200) {
                console.log("It's 200");
                console.log(response.data);
                setSearchTrips(response.data);
                setDepLoc(departlocation);
                setDepDate(departdate);
                setArrLoc(arrivallocation);
                setArrDate(arrivaldate);

                console.log(deploc);
                console.log(depdate);
                console.log(arrloc);
                console.log(arrdate);
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Button type="submit" style={{margin: '15px'}} size="lg">
                <img src={magglass} alt="glass" style={{paddingRight: '10px'}}/>Search</Button>
            </Form>
            {searchtrips ? <SearchTrips searchtrips={searchtrips} deploc={deploc} depdate={depdate}
            arrloc={arrloc} arrdate={arrdate}/> : null}
        </Container>
    );
}

export default Tickets;