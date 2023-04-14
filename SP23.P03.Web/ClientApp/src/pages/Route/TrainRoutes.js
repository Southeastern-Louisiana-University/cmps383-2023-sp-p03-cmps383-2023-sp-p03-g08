import React from "react";
import { Container } from "react-bootstrap";
import GetRoutes from "./GetRoutes";

function TrainRoutes() {
    return (
      <Container className="text-center">
        <h1>Routes</h1>
        <GetRoutes/>
      </Container>
    );
}

export default TrainRoutes;