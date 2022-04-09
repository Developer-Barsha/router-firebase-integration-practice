import React from 'react';
import './Login.css';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import app from '../../firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user]= useSignInWithGoogle(auth);
    return (
        <div>
            <h2>PLease Login</h2>
            <div style={{margin:'10px 0'}}>
                <button onClick={()=>signInWithGoogle()}>Google Sign In</button>
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