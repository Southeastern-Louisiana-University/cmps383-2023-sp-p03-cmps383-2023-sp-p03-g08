import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Coach from "./CoachSeats.jpg"
import First from "./First Class Seats.jpg"
import Sleeper from "./Sleeper.webp"
import Roomlet from "./Roomlet.png"
import Dining from "./Dining.webp"
function Prices() {
    return (
        <Container className="text-center">
            <h1>Seating and Prices</h1>
            <div style={{marginTop: '40px'}}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Coach</Accordion.Header>
                        <Accordion.Body>
                        <img src={Coach} alt="coach" width="500px" height="300px"/><br/><br/>
                        Coach class is offered on many EnTrack trains and features wide, reclining seats with ample legroom, no middle seat option and at-seat trays, reading lights and electric outlets. Restrooms are located in each car.<br/><br/>
                        <b>$105</b>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>First Class</Accordion.Header>
                        <Accordion.Body>
                        <img src={First} alt="1st class" width="500px" height="300px"/><br/><br/>
                        While in First Class, you'll relax in spacious one-by-two seating. All of our seats have adjustable headrests, lumbar support, footrests and handy individual outlets to charge up your device. Conference tables, with seating for two or four, are available. A luggage tower and oversized overhead bins enable easy storage of carry-on luggage. Complimentary WiFi is also available.<br/><br/>
                        <b>$270</b>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Sleeper</Accordion.Header>
                        <Accordion.Body>
                        <img src={Sleeper} alt="sleep" width="500px" height="300px"/><br/><br/>
                        Seating can convert to beds at night. Electrical outlets, climate controls, reading lights, a small closet, and a fold-down table are all within easy reach. Bed linens and soap are included, as are Dining Car meals, bottled water, coffee, and assistance from a Sleeping Car attendant.<br/><br/>
                        <b>$370</b>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Roomlet</Accordion.Header>
                        <Accordion.Body>
                        <img src={Roomlet} alt="roomlet" width="500px" height="300px"/><br/><br/>
                        Roomlets come with all the features of a sleeper, in addition to complimentary lounge access.<br/><br/>
                        <b>$400</b>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Dining</Accordion.Header>
                        <Accordion.Body>
                        <img src={Dining} alt="roomlet" width="500px" height="300px"/><br/><br/>
                        From full meals to more informal café service, many trains have one or more options for onboard dining. If you're not hungry now, you might hear your stomach rumbling after looking at our menus.<br/><br/>
                        <b>Fee Included in Base Trip Cost</b>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
}

export default Prices;