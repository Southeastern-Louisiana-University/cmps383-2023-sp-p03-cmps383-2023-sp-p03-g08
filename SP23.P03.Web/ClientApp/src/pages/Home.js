import React from "react";
import { Container } from "react-bootstrap";
import Placeholder from "../components/Placeholder";

function Home() {
    return (
       <Container className="text-center">
            <h1>Welcome to EnTrack!</h1>
            <Placeholder />
       </Container>
    );
}

export default Home;