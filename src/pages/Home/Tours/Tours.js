import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './tours.css'

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(`https://mighty-temple-95823.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    return (
        <div>
            {/* <h2>All Tours {tours.length}</h2> */}

            <div className='services'>
                {
                    tours.map(tour => <Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>)
                }
            </div>

        </div>
    );
};

export default Tours;