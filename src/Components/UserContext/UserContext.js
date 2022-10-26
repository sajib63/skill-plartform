import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]=useState({email:'sajib7315@gmail.com'})

    // create user 
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo={user,createUser}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;