import React from 'react';
import { Link } from 'react-router-dom';
import './Module.Header.css';
import logo from '../../../images/logo-white.png';

const Header = () => {
    return (
        <div className='header-section'>
            <div className='logo'>
                <img src={logo} width={100} alt="" />
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/practicearea'>Practice Areas</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;