import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import siemens from "./Siemens Charger.webp";
function Trains() {
    return (
        <Container className="text-center">
            <h1>Our Trains</h1>
            <div className="d-flex justify-content-center">
            <Card style={{width: '45rem'}}>
                <Card.Img variant="top" src={siemens} />
                <Card.Body>
                    <Card.Title>Siemens Charger</Card.Title>
                    <Card.Text style={{textAlign: 'left'}}>
                        Our state of the art Siemens Charger is our new standard means of getting you to your destination
                        quickly and safely. It is capable of hauling up to 8 passenger cars, holding coach, first class,
                        sleeper, roomlet, and dining availabilities. <a href="/prices">See more on our seating and pricing here.</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Container>
    );
}
export default Trains;