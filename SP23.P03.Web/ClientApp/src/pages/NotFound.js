import React from "react";
import { Container } from "react-bootstrap";
import Placeholder from "../components/Placeholder";
function NotFound() {
    return (
        <Container className="text-center">
            <h1>Not Found</h1>
            <Placeholder />
        </Container>
    );
}

export default NotFound;