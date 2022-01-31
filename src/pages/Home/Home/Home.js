import React from 'react';
import Tours from '../Tours/Tours';
import banner from '../../../../src/img sam/B-1.jpg'

const Home = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={banner} alt="" />
            {/* <h3>Home page</h3> */}
            <Tours></Tours>
        </div>
    );
};

export default Home;