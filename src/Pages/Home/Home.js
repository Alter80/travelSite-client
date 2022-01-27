import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Places from '../Places/Places';
import Aside from './Aside/Aside';
import HeroSection from './Banner/HeroSection';
import Slider from './Banner/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            {/* <HeroSection></HeroSection> */}
            <h2 className='mt-5 mb-3'>Trending Topics right now!!!</h2>
            <Row className='container-fluid m-0 p-0'>
                <Col className='col-md-9 col-sm-12 '>
                    <Places></Places>
                </Col>

                <Col className='col-md-3 col-sm-12 '>
                    <Aside></Aside>
                </Col>

            </Row>


        </div>
    );
};

export default Home;