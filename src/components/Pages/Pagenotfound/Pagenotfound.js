import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Module.Pagenotfound.css';

const Pagenotfound = () => {
    const navigatetohome = useNavigate();
    const redirectToHome = () =>{
        navigatetohome('/');
    }
    return (
        <div className='notfound-section'>
            <h1>Page Not Found</h1>
            <p>Please go to main page from here</p>
            <button onClick={() => redirectToHome()}>Home</button>
        </div>
    );
};

export default Pagenotfound;