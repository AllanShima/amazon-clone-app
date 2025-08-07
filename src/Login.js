import React, { useEffect, useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import userEvent from '@testing-library/user-event';

function Login() {
    const navigate = useNavigate(); // Allows to 'programically' change the url - changed from useHistory
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        // fancy firebase login
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            // successfully logged in
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // do some fancy firebase register
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            // successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    useEffect(() => {  
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' 
                src='https://www.allaboutlean.com/wp-content/uploads/2019/10/Amazon-Logo.png'/>
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            
                <hr/>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
