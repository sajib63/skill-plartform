import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ email: 'sajib7315@gmail.com' })
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [loading, setLoading]=useState(false);

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signinWith Google 

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // sign in With Github 
    const gitSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    // logout 
    const logoutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

// update user 
const updateCurrentUser=(profile)=>{
    setLoading(true)
return updateProfile(auth.currentUser, profile)
}

useEffect(()=>{
    const unsubscribed= onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(true)
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
        logoutUser,
        updateCurrentUser,
        loading
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;