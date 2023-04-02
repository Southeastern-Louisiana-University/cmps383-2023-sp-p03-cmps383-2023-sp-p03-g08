import React from "react";
import { Container } from "react-bootstrap";
import AuthService from "../services/AuthService";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Placeholder from "../components/Placeholder";
function Profile() {
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();
    if (currentUser == null) {
        return (
            <Container className="text-center">
                <h2>You aren't logged in right now.</h2>
                <Placeholder />
            </Container>
        );
    }
    async function logOut() {
        await axios.post("/api/authentication/logout")
        .then(function(response) {
            if (response.status === 200) {
                console.log("It's 200");
                console.log(response.data);
                localStorage.removeItem("user");
                navigate("/");
                window.location.reload();
            }
        })
        .catch((err) => {console.log(err)});
    }
    return (
        <Container className="text-center">
            <h1>Profile Info</h1>
          <b>{currentUser.userName}</b><br/>
        <Button variant="danger" onClick={logOut}>Logout</Button>
        </Container>
    );
}

export default Profile;