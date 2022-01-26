import { useEffect, useState } from 'react';

const useData = () => {
    const [places, setPlaces] = useState([]);

    const dataLocation = 'http://localhost:5000/places';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setPlaces(data));

    }, [])


    return { places };
};

export default useData;