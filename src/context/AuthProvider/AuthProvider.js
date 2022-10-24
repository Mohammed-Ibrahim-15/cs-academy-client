import React, { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const logIn = () => {
        return signInWithPopup(auth, googleProvider)
            .then()
            .catch()
    }

    const user = { displayName: 'Babar' }

    const authInfo = { user, logIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;