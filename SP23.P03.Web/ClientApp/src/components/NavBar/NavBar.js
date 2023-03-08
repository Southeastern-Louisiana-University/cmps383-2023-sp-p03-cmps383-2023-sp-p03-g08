import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import train from './train.svg';
function NavBar() {
    return (
        <Navbar className="main" sticky="top">
        <Container>
          <Navbar.Brand href="#"> 
            <img
              alt="a train"
              src={train}
              width="50"
              height="50"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <i style={{color: 'white', fontSize: '50px', fontFamily: "'Nunito', sans-serif"}}>EnTrack</i>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;