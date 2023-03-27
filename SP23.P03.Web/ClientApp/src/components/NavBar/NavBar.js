import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css';
import burger from './hamburger.svg';
import magnifyingglass from './search.svg';
import {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import TrainStations from '../../pages/Stations/TrainStations';
import TrainRoutes from '../../pages/TrainRoutes';
import Trips from '../../pages/Trips';
import Tickets from '../../pages/Tickets';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import SignedIn from '../User/SignedIn';
import NotSignedIn from '../User/NotSignedIn';
import NotFound from '../../pages/NotFound';
import Trains from '../../pages/Trains';

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
              <Nav.Link as={Link} to={"/trainstations"}>Train Stations</Nav.Link>
              <Nav.Link as={Link} to={"/routes"}>Routes</Nav.Link>
              <Nav.Link as={Link} to={"/trips"}>Trips</Nav.Link>
              <Nav.Link as={Link} to={"/tickets"}>Tickets</Nav.Link>
              <Nav.Link as={Link} to={"/trains"}>Trains</Nav.Link>
            </Nav>
          </Offcanvas.Body>
          </Offcanvas>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}><i style={{color: 'white', fontSize: '50px', fontFamily: "'Nunito', sans-serif"}}>EnTrack</i></Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto"/>
          <img src={magnifyingglass} alt="magnifyingglass" className="me-3"/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Looking for..."
              className="me-2"
              aria-label="Search"
              list="options"
            />
            <datalist id="options">
              <option value={"Train Stations"}/>
              <option value={"Routes"}/>
              <option value={"Trips"}/>
              <option value={"Tickets"}/>
              <option value={"Trains"}/>
            </datalist>
            <Button variant="light">Search</Button>
          </Form>
          <Nav className="me-auto"/*Somehow these (almost) center the search bar?*//>  
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
        <Route path="/tickets" element={<Tickets />}/>
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