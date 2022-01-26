import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Typing from 'react-typing-animation';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <header class="hero mb-5">
            <div class="container spacing">
                <h1 class="primary-title">It's okay to be obsessed with <br />
                    <Typing>
                        <Typing.Speed ms={100} />
                        <strong className='main-title'>Travelling</strong>
                        <Typing.Backspace count={20} />
                        <Typing.Speed ms={150} />
                        <strong className='main-title'>Moving</strong>
                        <Typing.Backspace count={10} />
                        <strong className='main-title'>Exploring</strong>
                    </Typing>
                </h1>

                <p className='fs-3 text-muted'>
                    Share your travelling experiences with us <br />
                </p>

                <a href="#" class="customBtn">See what we have</a>


            </div>
        </header>
    );
};

export default HeroSection;