import React from "react";
import { Container } from "react-bootstrap";
import video from "../pages/Trips/383 Images/rails-3639.mp4";
import train from "../pages/Trips/383 Images/train3.png";
import "../pages/Trips/Home.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../pages/Trips/Home.css"


function About() {
    return (
        <Container className="text-center">
            <h1>About Us</h1>
           

            <Container>
                <Row>
                    <Col>
                        <div class="flex-container">
                            <div>Contact:9853835555
                                Email:383@selu.edu              </div>
                        </div>

                    </Col>
                    <Col>
                        <div className="homeImages flex" >
                            <div className="videoDiv">
                                <video src={video} autoPlay muted loop className='video' alt='backgroundvideo'></video>
                            </div>



                            <img src={train} className='train' alt="train" />
                        </div>
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

export default About;
    