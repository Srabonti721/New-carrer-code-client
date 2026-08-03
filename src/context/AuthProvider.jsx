import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
 
    const logoutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUsers(currentUser);
            console.log("user in the auth state change", currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);
    const userInfo = {
        loading,
        users,
        setLoading,
        createUser,
        signInUser,
        logoutUser,
        googleSignIn
    };
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
