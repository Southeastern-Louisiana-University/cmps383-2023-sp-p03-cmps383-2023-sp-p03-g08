import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

function Loading() {
    return (
        <Container className="text-center">
            <h3>Loading...</h3>
            <Spinner animation="border" variant="info" />
        </Container>
    );
}

export default Loading;