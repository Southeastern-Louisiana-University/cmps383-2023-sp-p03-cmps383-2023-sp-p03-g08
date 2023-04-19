import React from "react";
import { Container } from "react-bootstrap";
import GetTrips from "./GetTrips";
function Trips() {
    return (
        <Container className="text-center">
            <h1>Upcoming Departures</h1>
            <GetTrips/>
        </Container>
    );
}

export default Trips;