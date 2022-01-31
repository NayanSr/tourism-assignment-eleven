import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { tourId } = useParams();
    const [tour, setTour] = useState({})

    useEffect(() => {
        fetch(`https://mighty-temple-95823.herokuapp.com/services/${tourId}`)
            .then(res => res.json())
            .then(data => setTour(data));
    }, []);

    return (
        <div style={{ marginLeft: '50px' }}>

            <h4>Package Name : {tour.name}</h4>
            <p>Package Details : {tour.details}</p>
        </div>
    );
};

export default Booking;