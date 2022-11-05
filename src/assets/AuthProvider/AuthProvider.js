import React, { useEffect, useState } from 'react';
import { createContext } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true);

   //Goo
   const provider = new GoogleAuthProvider()
   const signInGoogle = () => {
      return signInWithPopup(auth, provider)
   }
   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const login = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log(currentUser);
         setUser(currentUser)
         setLoading(false)
      });
      return (() => {
         return unSubscribe()
      })
   }, [])
   const authInfo = {
      user, loading, createUser, login, signInGoogle
   }
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;