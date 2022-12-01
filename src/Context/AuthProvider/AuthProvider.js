import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // log in
    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // creat user
    const creatUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        return signOut(auth)
    }

    // sign in
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change ', currentUser)
            setUser(currentUser)
        });
        return () => {
            unsubscribe()
        }

    },[])

    const authInfo = { user, providerLogIn, logOut, creatUser, signIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;