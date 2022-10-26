import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ email: 'sajib7315@gmail.com' })
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signinWith Google 

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // sign in With Github 
    const gitSignIn = () => {
        return signInWithPopup(auth, gitProvider)
    }
    // logout 
    const logoutUser=()=>{
        return signOut(auth)
    }

useEffect(()=>{
    const unsubscribed= onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribed();
    }
},[])

    const userInfo = {
        user,
        createUser,
        loginUser,
        googleSignIn,
        gitSignIn,
        logoutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;