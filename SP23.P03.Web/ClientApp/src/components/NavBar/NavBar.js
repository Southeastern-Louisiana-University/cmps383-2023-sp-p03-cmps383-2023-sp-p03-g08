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
import TrainRoutes from '../../pages/Route/TrainRoutes';
import Trips from '../../pages/Trips/Trips';
import TripBooking from '../../pages/TripBooking/TripBooking';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile/Profile';
import SignedIn from '../User/SignedIn';
import NotSignedIn from '../User/NotSignedIn';
import NotFound from '../../pages/NotFound';
import Trains from '../../pages/Trains/Trains';
import About from '../../pages/About';
import Prices from '../../pages/PricesAndSeating/Prices';
import AuthService from '../../services/AuthService';
import Col from "react-bootstrap/Col";

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
            <Col className="d-flex justify-content-start">
            <img onClick={handleShow} style={{cursor: 'pointer', paddingRight: '17px'}}
              alt="a burger"
              src={burger}
             />
            <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}><i style={{color: 'white', fontSize: '50px', fontFamily: "'Nunito', sans-serif"}}>EnTrack</i></Nav.Link>
            </Navbar.Brand>
                <img
                  alt="a train"
                  src={train}
                /> 
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton style={{backgroundColor: '#d8b4fe'}}>
                <Offcanvas.Title><b>Menu</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{backgroundColor: '#f2e6ff'}}>
                <Nav style={{fontSize: '30px'}} onClick={handleClose}>
                <Nav.Link as={Link} to={"/tripbooking"}><b>Book a Trip</b></Nav.Link>
                <Nav.Link as={Link} to={"/trainstations"}>Train Stations</Nav.Link>
                <Nav.Link as={Link} to={"/routes"}>Routes</Nav.Link>
                <Nav.Link as={Link} to={"/trips"}>Departures</Nav.Link>
                <Nav.Link as={Link} to={"/trains"}>Trains</Nav.Link>
                <Nav.Link as={Link} to={"/prices"}>Seating/Prices</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
            </Col>
            <Col className="d-flex justify-content-center">
              <Nav.Link as={Link} to={"/tripbooking"}>
              <Button variant="light" size="lg" style={{color: '#d8b4fe'}}>
              <img src={ticket} alt="a ticket" style={{marginRight: '10px'}}/>
                Book a Trip
              </Button>
              </Nav.Link>
            </Col>
            <Col className="d-flex justify-content-end">
              <div>
                {userComponent}
              </div>
            </Col>
          
          </Container>
          </Navbar>
       <Routes>
        <Route path="/trainstations" element={<TrainStations />}/>
        <Route path="/routes" element={<TrainRoutes />}/>
        <Route path="/trips" element={<Trips />}/>
        <Route path="/tripbooking" element={<TripBooking />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/trains" element={<Trains />}/>
        <Route path="/prices" element={<Prices />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />} /*this route must be last*//>
       </Routes>
    </Router>
    );
}

export default NavBar;