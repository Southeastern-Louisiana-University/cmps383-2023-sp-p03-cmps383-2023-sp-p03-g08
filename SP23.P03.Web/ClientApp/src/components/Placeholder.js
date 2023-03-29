import React from "react";
import train from './NavBar/train.svg';
import { Container } from "react-bootstrap";

function Placeholder() {
    return (
        <Container className="text-center">
            <br/>
            <div style={{opacity: 0.5}}>
                <img src={train} style={{width: '400px', height: '400px'}} alt="train"/><br/>
                <i style={{color: 'white', fontSize: '100px', fontFamily: "'Nunito', sans-serif"}}>EnTrack</i>
            </div>
        </Container>
    );
}

export default Placeholder;