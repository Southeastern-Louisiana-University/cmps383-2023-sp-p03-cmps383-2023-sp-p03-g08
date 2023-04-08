import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Loading from "../../components/Loading";

function GetStations() {
    const img = "https://th.bing.com/th/id/OIP.mbJnAlORnMbaudaIJj1xOQHaFh?pid=ImgDet&rs=1";
    const [stations, setStation] = useState();
    useEffect(() => {
        axios.get("api/stations").then((response) => {
            setStation(response.data)
        }).catch((err) => {console.log(err)})
    }, [])
    return (
        <Container>
            <Row>
            {stations ? (
                stations.map((station) => {
                    return (
                        <Col className="d-flex justify-content-center">
                        <Card style={{ width: '15rem', height: '18rem', margin: '7px'}} key={station.id}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{station.name}</Card.Title>
                            <Card.Text>
                                 {station.address}<br/>
                                 {station.city + ", " + station.state}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
                    )
                })
            ) : (
                <Loading/>
            )}
            </Row>
        </Container>
    );
}

export default GetStations;