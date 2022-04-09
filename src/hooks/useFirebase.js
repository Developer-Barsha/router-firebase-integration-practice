import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.init'

const useFirebase=()=>{
    const auth = getAuth(app);
    const googleProvider= new GoogleAuthProvider();

    const [user, setUser]=useState({});
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[]);

    // handle sign out
    
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('signed out');
        })
        .catch(err=>{
            console.log(err.message);
        })
    };

    // sign in with google
    const signInWithGoogle=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(err=>{
            console.log(err);
        })
    };

    return {user, signInWithGoogle, handleSignOut}
};

export default useFirebase;