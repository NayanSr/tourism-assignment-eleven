import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Log In</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Login</button>
        </div>
    );
};

export default Login;