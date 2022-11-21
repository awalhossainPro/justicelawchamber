import React, { useRef } from 'react';
import logo from '../../../images/logo-white.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Module.Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [ signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
  
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, {replace: true});
    }

    return (
        <div className='login-page'>
            <div className='login-area'>
            <img src={logo} width={170} alt="" />
            <form onSubmit={handleSubmit} className='all-input'>
                {
                    loading
                    ?
                    <p style={{padding:'5px 0', background:'lightgreen', width:"100%", textAlign:'center', color:'white'}}>Loading</p>
                    :
                    ""
                }

                <input ref={emailRef} type="email" name="email" id="" placeholder='Your email'/>
                <br />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Your password' />
                <br />
                <button type="submit" className='signin'>Sign in</button>
            </form>
            <p className='not-registered'>
                Not registerd? <span><Link to='/register'>Please Register</Link></span>
            </p>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;