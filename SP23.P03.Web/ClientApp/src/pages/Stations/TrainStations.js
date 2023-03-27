import React from "react";
import { Container } from "react-bootstrap";
import GetStations from "./GetStations";
function TrainStations() {
    return (
      <Container className="text-center">
            <h1>Train Stations</h1>
            <GetStations/>
      </Container>
    );
}

export default TrainStations;