import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    // function for signup
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // function for login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // function for sign out
    const logout = () => {
        return signOut(auth);
    }

    // use observer for hold user info
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
        })

        return () => unSubscribe();

    },[])

    const authInfo = {user, createUser, signIn, logout};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;