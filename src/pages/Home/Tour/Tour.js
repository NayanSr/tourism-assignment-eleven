import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'

const Tour = (props) => {
    const { _id, name, img, details, price } = props.tour;
    return (
        <div className='service'>
            <h2 style={{ color: 'blue' }}>Tour at : {name}</h2>
            <img src={img} alt="" />
            <p> &nbsp;&nbsp;&nbsp; {details}</p>
            <small>Package Price : {price}</small><br />
            <Link to={`/tours/${_id}`}>
                <button style={{ marginTop: "10px", backgroundColor: 'yellow', padding: '5px 15px' }}>Book This</button>
            </Link>

        </div>
    );
};

export default Tour;