import { createContext, useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { onAuthStateChanged,
signInWithEmailAndPassword,
signOut,
GoogleAuthProvider,
signInWithPopup } from "firebase/auth";
 const auth=getAuth(app)
export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider();
   

const Provider = ({children}) => {
     
    const [user,setUser]=useState(null)
   const[loading,setLoading]= useState(true);
   const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
   }


   const googlesignin=()=>{
    setLoading(true);
      return signInWithPopup(auth,googleProvider);


   }


   const signin=(email,password)=>{
    setLoading(true);
     return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut=()=>{
    setLoading(true);
      return signOut(auth);
   }
   
  useEffect(()=>{
    const unsub=onAuthStateChanged(auth,(currentUser)=>{
        console.log('state cnged');
        setUser(currentUser)
        setLoading(false);
    })
    return(()=>{
        return unsub()
    })
  },[])


   const userInfo={
    user,
    loading,
    createUser,
    googlesignin,
    logOut,
    signin,
    

   }

    return (
       <AuthContext.Provider value={userInfo} >
        {children}
            
        </AuthContext.Provider>
    );
};

export default Provider;