import React from 'react';
import useData from '../../../hooks/useData';
import AsideCard from './AsideCard';

const Aside = () => {
    const { places } = useData();

    const featuredPlaces = places.slice().sort((a, b) => 0.5 - Math.random())


    return (
        <div className='p-3 mt-3'>
            <h5 className='text-muted'>Related Blogs</h5>
            {
                featuredPlaces.slice(0, 5).map(place => <AsideCard key={place._id}
                    place={place}></AsideCard>)
            }

        </div>
    );
};

export default Aside;