import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);
const axiosPublic = useAxiosPublic();
  //manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser === null || currentUser.email) {
        //get token
        const userInfo = {email:currentUser.email}
        axiosPublic.post('/jwt',userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
        })

      } else {
        //remove token
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //create user with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in with email password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //login with google

  const loginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };
  //update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //logOUT
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    updateUserProfile,
    createUser,
    signIn,
    loginWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
