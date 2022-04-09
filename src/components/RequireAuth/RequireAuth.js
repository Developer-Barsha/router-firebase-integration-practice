import { Navigate, useLocation } from "react-router-dom";
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
const auth=getAuth(app);

const RequireAuth=({ children })=>{
    const [user] = useAuthState(auth);
    let location = useLocation();
    if(!user){
        return <Navigate to={'/login'} state={{ from : location }} replace />;
    }
    return children;
}

export default RequireAuth;



// function RequireAuth({ children }: { children: JSX.Element }) {
//     let auth = useAuth();
//     let location = useLocation();
  
//     if (!auth.user) {
//       // Redirect them to the /login page, but save the current location they were
//       // trying to go to when they were redirected. This allows us to send them
//       // along to that page after they login, which is a nicer user experience
//       // than dropping them off on the home page.
//       return <Navigate to="/login" state={{ from: location }} replace />;
//     }
  
//     return children;
//   }

// export default RequireAuth;