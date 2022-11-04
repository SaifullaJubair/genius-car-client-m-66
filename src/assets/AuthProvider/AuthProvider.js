import React, { useEffect, useState } from 'react';
import { createContext } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true);

   //Goo
   const signInGoogle = (provider) => {
      return signInWithPopup(auth, provider)
   }
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log(currentUser);
         setUser(currentUser)
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