import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css';
import burger from './hamburger.svg';
import train from './train.svg';
import ticket from './ticket.svg';
import {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import TrainStations from '../../pages/Stations/TrainStations';
import TrainRoutes from '../../pages/TrainRoutes';
import Trips from '../../pages/Trips';
import TripBooking from '../../pages/TripBooking';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import SignedIn from '../User/SignedIn';
import NotSignedIn from '../User/NotSignedIn';
import NotFound from '../../pages/NotFound';
import Trains from '../../pages/Trains';
import AuthService from '../../services/AuthService';

function NavBar() {
    const currentUser = AuthService.getCurrentUser();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    let userComponent;
    if (currentUser != null) {
      userComponent = <SignedIn />
    }
    else {
      userComponent = <NotSignedIn/>
    }
    
    return (
      <Router>
        <Navbar className="main" sticky="top">
        <Container>
          <Navbar.Brand style={{cursor: 'pointer'}}> 
            <img onClick={handleShow}
              alt="a burger"
              src={burger}
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
            <Nav.Link as={Link} to={"/tripbooking"}><b>Book a Trip</b></Nav.Link>
              <Nav.Link as={Link} to={"/trainstations"}>Train Stations</Nav.Link>
              <Nav.Link as={Link} to={"/routes"}>Routes</Nav.Link>
              <Nav.Link as={Link} to={"/trips"}>Trips</Nav.Link>
              <Nav.Link as={Link} to={"/trains"}>Trains</Nav.Link>
            </Nav>
          </Offcanvas.Body>
          </Offcanvas>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}><i style={{color: 'white', fontSize: '50px', fontFamily: "'Nunito', sans-serif"}}>EnTrack</i></Nav.Link>
          </Navbar.Brand>
          <Navbar.Brand> 
            <img
              alt="a train"
              src={train}
              width="45"
              height="45"
            />
          </Navbar.Brand>
          <Nav className="me-auto"/>
          <Nav.Link as={Link} to={"/tripbooking"}>
          <Button variant="warning" size="lg" style={{color: 'white'}}>
            <img src={ticket} alt="a ticket" style={{marginRight: '10px'}}/>
            Book a Trip
          </Button>
          </Nav.Link>
          <Nav className="me-auto"/*Somehow these (almost) center*//>  
          <Nav className="me-auto"/>
          <Nav className="me-auto"/>
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
        <Route path="/tripbooking" element={<TripBooking />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/trains" element={<Trains />}/>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />} /*this route must be last*//>
       </Routes>
      </div>
    </Router>
    );
}

export default NavBar;