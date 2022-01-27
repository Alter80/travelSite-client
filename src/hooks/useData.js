import { useEffect, useState } from 'react';

const useData = () => {
    const [places, setPlaces] = useState([]);

    const dataLocation = 'https://murmuring-chamber-98588.herokuapp.com/places';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setPlaces(data));

    }, [])


    return { places };
};

export default useData;