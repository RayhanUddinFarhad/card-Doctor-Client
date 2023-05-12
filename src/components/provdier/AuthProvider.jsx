import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';



export const AuthContext = createContext(null)

const auth = getAuth(app);








const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)



    const register = (email, password) => {

      return  createUserWithEmailAndPassword (auth, email, password)





     }

     const logOut = () => {


        return signOut (auth)
     }

     const login = (email, password) => {

        return signInWithEmailAndPassword (auth, email, password)





     }

     useEffect (() => { 



        const unsubscribe = onAuthStateChanged (auth, currentUser => {

            setUser (currentUser)
        })

       return () => unsubscribe;
     }, [])














    const authInfo = {


        user,
        register,
        logOut,
        login
    }






    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;