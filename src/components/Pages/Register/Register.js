import React from 'react';
import './Module.Register.css';
import logo from '../../../images/logo-white.png';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password, name);
        // await useUpdateProfile({ displayName: name });
    }

    return (
        <div className='register-page'>
            <img src={logo} width={150} alt="" />
            <form onSubmit={handleRegister} className='all-input'>
                {
                    loading
                    ?
                    <p style={{padding:'5px 0', background:'lightgreen', width:"100%", textAlign:'center', color:'white'}}>Loading</p>
                    :
                    ""
                }
                <input type="text" name="name" id="" placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <button className='register' type='submit'>Register</button>
            </form>
            <p className='already-registered'>
                Already registerd? <span><Link to='/login'>Please Login</Link></span>
            </p>
        </div>
    );
};

export default Register;