import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth} from "firebase/auth";
import './Home.css'
import app from '../../firebase.init'
const auth = getAuth(app);

const Home = () => {
    const [user] =useAuthState(auth);

    return (
        <div>
            <h2>This is Home</h2>
            <img src={user?.photoURL} alt="" />
            <h3>{user?.displayName}</h3>
            <h5>{user?.email}</h5>
        </div>
    );
};

export default Home;