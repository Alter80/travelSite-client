import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const PlaceDetails = () => {
    const [place, setPlace] = useState({})
    const { id } = useParams();

    // data fetch
    useEffect(() => {
        const url = `http://localhost:5000/places/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, [])

    const { _id, image, travelerName, email, travelLocation, description, travelCategory, cost, address } = place;
    return (
        <div>
            <Card className="text-center h-100 mt-4 m-5">
                <Card.Body className='d-md-flex justify-content-around align-items-center'>
                    <Card.Img id='carimg' className='p-5 img-fluid' variant="top" src={image} />


                    <Card.Text className='text-start'>
                        <p>{travelCategory}</p>
                        <Card.Title className="mb-2"><h3><strong>{travelLocation}</strong></h3></Card.Title>

                        <p><small className='text-muted'>Address</small> <br /> {address}</p>
                        <p><small className='text-muted'>Traveler Name</small> <br /> {travelerName}</p>


                        <p className='text-start'> <strong className='text-muted'>Details: </strong>{description}</p>

                        <h3>Price: $<strong>{cost}</strong> per person(avg.)</h3>
                    </Card.Text>
                </Card.Body>



                <div className='my-3 mx-auto d-flex'>
                    <Link to='/' className='text-decoration-none'><Button className='py-2 px-4 ms-3 rounded-pill' variant="outline-secondary">Go Home</Button> </Link>
                </div>

            </Card>

        </div>
    );
};

export default PlaceDetails;