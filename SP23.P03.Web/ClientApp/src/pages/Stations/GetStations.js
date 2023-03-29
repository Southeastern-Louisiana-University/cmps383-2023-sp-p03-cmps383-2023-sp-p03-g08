import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
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
        <div>
            {stations ? (
                stations.map((station) => {
                    return (
                        <>
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{station.name}</Card.Title>
                            <Card.Text>
                                 {station.address + ", " + station.city + ", " + station.state}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        <br/>
                        </>
                    )
                })
            ) : (
                <Loading/>
            )}
        </div>
    );
}

export default GetStations;