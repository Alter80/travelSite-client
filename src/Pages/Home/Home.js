import React from 'react';
import Places from '../Places/Places';
import HeroSection from './Banner/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <h2 className='mt-5 mb-3'>Trending Topics right now!!!</h2>
            <div className='d-md-flex justify-content-between'>
                <div className='mainbar'>
                    <Places></Places>
                </div>

                <div className='sidebar'>
                    <h3>This is sidebar</h3>
                </div>

            </div>

        </div>
    );
};

export default Home;