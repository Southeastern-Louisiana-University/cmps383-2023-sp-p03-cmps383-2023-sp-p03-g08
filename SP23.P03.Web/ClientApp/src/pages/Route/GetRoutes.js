import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";

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
                                {route.description}
                                </Card.Text>
                                <Card.Text>
                                    {route.trainStations[1].city}
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
