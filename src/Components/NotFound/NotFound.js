import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound pt-5">
            <img className="py-5 px-5 " src="https://www.seekpng.com/png/full/212-2123432_404-error-error-404-in-png.png" />
            <p className="button"><button className="bg-warning rounded px-2 py-1"><Link to="/home">Go Back To home</Link></button></p>
        </div>
    );
};

export default NotFound;