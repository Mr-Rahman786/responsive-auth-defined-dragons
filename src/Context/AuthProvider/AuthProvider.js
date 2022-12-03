import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // log in
    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // creat user
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // email varification 
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // store name and image log in
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser,profile);
    }

    // sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
            // console.log('user inside state change ', currentUser)
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }

    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        providerLogIn,
        logOut,
        creatUser,
        varifyEmail,
        signIn,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;