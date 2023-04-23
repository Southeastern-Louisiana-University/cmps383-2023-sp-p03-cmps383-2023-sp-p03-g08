import React, { useState} from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../pages/Trips/383 Images/image1.jpg';
import image2 from '../pages/Trips/383 Images/image2.jpg';
import image3 from '../pages/Trips/383 Images/image3.jpg';
import image4 from '../pages/Trips/383 Images/image4.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';




function Home() {
    const [show, setShow] = useState(false);
    return (
       <Container className="text-center">
            <h1>Welcome to EnTrack!</h1>
            <Carousel variant="dark">
      <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="s1"> Enjoy a more rewarding travel</h5>
          <p className="s11">Book Tickets and Earn Points</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="s2"> Limited Time Offer</h5>
          <p className="s22">Specisl Travel 75000 bonus miles </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="s3"> Visit National Parks</h5>
          <p className="s33">
            Find low prices and book today!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>
          
          
            <div>

                

             
                    <h1>Supporting You Through Your Journey</h1>
               
                <Container>
                  
                <Row>
                        <Col xs={{ order: 'last' }}>
                            <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                           
                            />
                           
                            <b>Travel Confidently with the Mapp</b>
                        </Col>
                        <Col xs>
                             <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                            <>
                            <Alert show={show} variant="secondary">
                                <Alert.Heading>Travel Requirements</Alert.Heading>
                                <p>
                                        Make sure you have all required travel documents, including your valid ID. Some places have also imposed temporary health-related entry requirements.
                                </p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => setShow(false)} variant="outline-success">
                                        Close 
                                    </Button>
                                </div>
                            </Alert>

                                {!show && <Button onClick={() => setShow(true)} variant="outline-secondary">Explore Destinations and Travel Requirements</Button>}
                        </>
                            
                        </Col>
                        <Col xs={{ order: 'first' }}>

                              <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                            
                            <b>Ready for an    <a href="/tripbooking">adventure </a>?</b> 

                        </Col>
                </Row>
                </Container>
            </div>




          
            
       </Container>
    );
}

export default Home;

