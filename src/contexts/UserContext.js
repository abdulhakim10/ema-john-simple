import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
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

    const authInfo = {user, createUser, signIn, logout};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;