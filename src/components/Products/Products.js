import React from 'react';
import './Products.css'
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const Products = () => {
    const auth = getAuth(app);
    const [user]=useAuthState(auth);

    return (
        <div>
            <h2>KNOCK KNOCK! WHO IS THERE???</h2>
            <h3>{user? user.displayName : 'GHOOOOOST'}</h3>
        </div>
    );
};

export default Products;