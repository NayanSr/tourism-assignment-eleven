import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Privateroute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    if (user.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} />
};

export default Privateroute;