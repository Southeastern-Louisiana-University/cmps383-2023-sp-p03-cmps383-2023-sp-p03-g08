import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import ListGroup from 'react-bootstrap/ListGroup';

function routeStations(obj) {
    var rs = [];
    for(let i = 0; i < obj.length; i++) {
        rs.push(<ListGroup.Item>{obj[i].name + " - " + obj[i].address + " - " + obj[i].city + ", " + obj[i].state}</ListGroup.Item>);
    }
    return rs;
}
function GetRoutes() {
    const [routes, setRoute] = useState();
    useEffect(() => {
        axios.get("api/routes").then((response) => {
            setRoute(response.data)
            console.log(response.data);
        }).catch((err) => {console.log(err)})
    }, [])
    return (
        <Container>
            {routes ? (
                routes.map((route) => {
                    return (
                        <Card key={route.id}>
                            <Card.Body>
                                <Card.Title><h2>{route.name}</h2></Card.Title>
                                <Card.Text>
                                    <i>{route.order}</i><br/>
                                </Card.Text>
                                <Card.Text>
                               <h5>{route.description}</h5>
                                </Card.Text>
                                <Card.Text className="text-start">
                                    <b>Serving Train Stations:</b>
                                    <ListGroup>
                                        {routeStations(route.trainStations)}
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            ) :  (
                <Loading/>
            )}
        </Container>
    );
}

export default GetRoutes;
