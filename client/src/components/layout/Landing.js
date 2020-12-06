import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            Welcome to the Template App
            <div>
                <Link to="/register" className="btn btn-primary">Sign Up</Link>
                <Link to="/login" className="btn btn-light">Login</Link>
            </div>
        </div>
    )
}

export default Landing;