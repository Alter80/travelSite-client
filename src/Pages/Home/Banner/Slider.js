import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Carousel className='containter sliderMain' fade variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 sliderImg img-fluid"
                        src="https://images.unsplash.com/photo-1597637245724-beb1e10cb79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3 className='primary-title'>Explore, Travel, Share</h3>
                        <p>Share your travel experiences with us.</p>
                        <a href="#" className="customBtn">See what we have</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 sliderImg img-fluid"
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='caption'>
                        <h3 className='primary-title'>Explore, Travel, Share</h3>
                        <p>Share your travel experiences with us.</p>
                        <a href="#" class="customBtn">See what we have</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 sliderImg img-fluid"
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='caption'>
                        <h3 className='primary-title'>Explore, Travel, Share</h3>
                        <p>Share your travel experiences with us.</p>
                        <a href="#" class="customBtn">See what we have</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;