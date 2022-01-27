import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AsideCard = (props) => {
    const { _id, image, travelerName, email, travelLocation, description, travelCategory, cost, address, status } = props.place;

    const showPosts = (postStatus) => {
        if (postStatus == 'approved') {
            return <Col className='p-3' >
                <Link to={`/places/${_id}`} className='text-decoration-none text-black'>
                    <Card className='hover-card  card-border'>
                        <Card.Img className='p-3 img1 mx-auto rounded img-fluid' variant="top" src={image} />

                        <Card.Body className='text-start'>
                            <p className='text-muted'>{address}</p>
                            <Card.Title>{travelLocation}</Card.Title>
                            <Card.Text>
                                <p className='text-muted'>{travelCategory}</p>
                                <p className='text-muted'>{travelerName}</p>
                                <p className='text-muted'>cost: ${cost}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>{description.substring(0, 160)}...</p>
                            </Card.Text>

                            <Button variant="outline-dark" className='px-5'>Details</Button>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        }

    }


    return (
        <div>
            {showPosts(status)}
        </div>
    );
};

export default AsideCard;