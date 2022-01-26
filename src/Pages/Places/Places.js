import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SinglePlace from './SinglePlace';

const Places = () => {
    const { places } = useData();
    console.log(places);


    return (
        <div>
            <Row xs={1} md={1} className="container mx-auto my-5 g-4">
                {
                    places.length == 0 ? <Spinner className='mx-auto' animation="border" /> : places.map(place => <SinglePlace key={place._id}
                        place={place}></SinglePlace>)

                }
            </Row>
        </div>
    );
};

export default Places;