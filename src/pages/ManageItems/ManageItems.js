import React, { useState, useEffect } from 'react';

const ManageItems = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://mighty-temple-95823.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    const handelDelete = id => {
        const url = `https://mighty-temple-95823.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    const restItem = tours.filter(tour => tour._id !== id);
                    setTours(restItem);
                    alert('deleted item')
                }

            })
    }

    return (
        <div style={{ marginLeft: '100px' }}>
            {
                tours.map(tour => <div key={tour._id}>
                    <h4 >{tour.name}</h4>
                    <button onClick={() => handelDelete(tour._id)} style={{ marginTop: '10px', marginLeft: '30px' }}>X</button>

                </div>)
            }
        </div>
    );
};

export default ManageItems;