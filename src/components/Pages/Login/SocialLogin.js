import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Module.Login.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    

    return (
        <div>
            
            <div className='or'>
                <div className='line'></div>
                <p>OR</p>
                <div className='line'></div>
            </div>
            <div className='social-login'>
            {
                loading ?
                <p>Loading...</p>
                :
                ""
            }
                <button onClick={()=> signInWithGoogle()} className='googleLogin'>Login with google</button>
            </div>
        </div>
    );
};

export default SocialLogin;