import React from 'react';
import './Login.css';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user]= useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from=location.state?.form?.pathname || '/';
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from, { replace: true });
        })
    }

    return (
        <div>
            <h2>PLease Login</h2>
            <div style={{margin:'10px 0'}}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;