import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css';
import train from './train.svg';
import {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import TrainStations from '../../pages/TrainStations';
import TrainRoutes from '../../pages/TrainRoutes';
import Trips from '../../pages/Trips';
import Tickets from '../../pages/Tickets';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import SignedIn from '../User/SignedIn';
import NotSignedIn from '../User/NotSignedIn';
function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let userComponent; //test code, actually want to render based on backend authentication eventually
    let isLoggedIn = false;
    if (isLoggedIn) {
      userComponent = <SignedIn />
    }
    else {
      userComponent = <NotSignedIn/>
    }
    return (
      <Router>
        <Navbar className="main" sticky="top">
        <Container>
          <Navbar.Brand href="#"> 
            <img onClick={handleShow}
              alt="a train"
              src={train}
              width="50"
              height="50"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
          <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton style={{backgroundColor: '#d8b4fe'}}>
            <Offcanvas.Title><b>Menu</b></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{backgroundColor: '#f2e6ff'}}>
            <Nav style={{fontSize: '30px'}} onClick={handleClose}>
              <Nav.Link as={Link} to={"/trainstations"}>Train Stations</Nav.Link>
              <Nav.Link as={Link} to={"/routes"}>Routes</Nav.Link>
              <Nav.Link as={Link} to={"/trips"}>Trips</Nav.Link>
              <Nav.Link as={Link} to={"/tickets"}>Tickets</Nav.Link>
            </Nav>
          </Offcanvas.Body>
          </Offcanvas>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}><i style={{color: 'white', fontSize: '50px', fontFamily: "'Nunito', sans-serif"}}>EnTrack</i></Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto"/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form>
          <div>
              {userComponent}
          </div>
        </Container>
      </Navbar>
      <div>
       <Routes>
        <Route path="/trainstations" element={<TrainStations />}/>
        <Route path="/routes" element={<TrainRoutes />}/>
        <Route path="/trips" element={<Trips />}/>
        <Route path="/tickets" element={<Tickets />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<Home />}/>
       </Routes>
      </div>
    </Router>
    );
}

export default NavBar;