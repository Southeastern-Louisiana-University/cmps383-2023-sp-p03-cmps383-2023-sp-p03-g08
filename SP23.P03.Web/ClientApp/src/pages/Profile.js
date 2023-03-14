import React from "react";
import { Container } from "react-bootstrap";
import Placeholder from "../components/Placeholder";

function Profile() {
    return (
        <Container className="text-center">
            <h1>Profile Info</h1>
            <Placeholder />
        </Container>
    );
}

export default Profile;