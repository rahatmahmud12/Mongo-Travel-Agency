
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {

    const [error, setError] = useState('')
    const [isLogin, setIslogin] = useState(false);
    const { signInUsingGoogle } = useFirebase()
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const auth = getAuth();












    return (
        <div className="mt-20">
            <h1>Please Login here</h1>


            <button className="btn btn-primary mb-3" onClick={handleGoogleLogIn}>Google Sign In</button>

            <p>New Here- Please Sign Up first</p>
            <button className="btn btn-primary mb-3" onClick={handleGoogleLogIn}>Google Sign up</button>


        </div>
    );
};

export default Login;