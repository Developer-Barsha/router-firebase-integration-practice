import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h2>PLease Login</h2>
            <form>
                <input type="email" placeholder='Your Email' />
                <br/>
                <input type="password" name="" id="" placeholder='Your Password'/>
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;