import React from 'react';
import useData from '../../../hooks/useData';
import AsideCard from './AsideCard';

const Aside = () => {
    const { places } = useData();


    return (
        <div className='p-3 mt-4'>
            {
                places.slice(0, 5).map(place => <AsideCard key={place._id}
                    place={place}></AsideCard>)
            }

        </div>
    );
};

export default Aside;