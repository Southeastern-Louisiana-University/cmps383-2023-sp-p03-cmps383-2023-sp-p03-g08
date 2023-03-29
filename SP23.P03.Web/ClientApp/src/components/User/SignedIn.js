import React from "react";
import { Image } from "react-bootstrap";
import person from './person.svg';
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
function SignedIn() {
    const toolTip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Your Profile
        </Tooltip>
    );
    return (
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={toolTip}>
        <Nav.Link as={Link} to={"/profile"}>
            <Image src={person}/>
        </Nav.Link>
        </OverlayTrigger>
    );
}

export default SignedIn;