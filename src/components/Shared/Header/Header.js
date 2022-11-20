import React from 'react';
import { Link } from 'react-router-dom';
import './Module.Header.css';
import logo from '../../../images/logo-white.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <div className='header-section'>
            <div className='logo'>
                <img src={logo} width={100} alt="" />
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/protectedpage'>Protected Page</Link>
                <Link to='/about'>About</Link>
                {/* <Link to='/practicearea'>Practice Areas</Link> */}
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                {
                    user ?
                    <button className='log-out' onClick={handleLogOut}>Log Out</button>
                    :
                    <Link className='log-out' to='/login'>Login</Link>
                }
                <Link to='/Register'>Register</Link>
                {
                    user
                    ?
                    <span className='userName'>{user?.displayName}</span>
                    :
                    ""
                }
            </nav>
        </div>
    );
};

export default Header;