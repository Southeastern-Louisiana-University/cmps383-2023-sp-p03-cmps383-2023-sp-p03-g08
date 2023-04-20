import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../pages/Trips/383 Images/image1.jpg';
import image2 from '../pages/Trips/383 Images/image2.jpg';
import image3 from '../pages/Trips/383 Images/image3.jpg';
import image4 from '../pages/Trips/383 Images/image4.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from "../components/Placeholder";
import video from "../pages/Trips/383 Images/rails-3639.mp4"
import train from "../pages/Trips/383 Images/train3.png"
import "../pages/Trips/Home.css"



function Home() {
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
          <h5>Enjoy a more rewarding travel</h5>
          <p>Book Tickets and Earn Points</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Limited Time Offer</h5>
          <p>Specisl Travel 75000 bonus miles </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Visit National Parks</h5>
          <p>
            Find low prices and book today!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>

            <Placeholder/>

            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>
                </div>

                

                <img src={train} className='train' />
            </div>
                
           <Placeholder/>
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
                            Ready for an Adventure?

                        </Col>
                        <Col xs>
                             <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                            Explore Destinations and Travel Requirements
                        </Col>
                        <Col xs={{ order: 'first' }}>

                              <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                            Travel with confidence with the app

                        </Col>
                </Row>
                </Container>
            </div>
            
       </Container>
    );
}

export default Home;