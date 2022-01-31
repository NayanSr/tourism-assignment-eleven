import React, { useEffect, useState } from 'react';
import './AllServices.css';
import SingleService from '../SingleService/SingleService';

const AllServices = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(`https://mighty-temple-95823.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);
    return (
        <div>
            <div className='servicees'>
                {
                    tours.map(tour => <SingleService
                        key={tour._id}
                        tour={tour}
                    ></SingleService>)
                }
            </div>

        </div>
    );
};

export default AllServices;
