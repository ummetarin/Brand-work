import { createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
 const auth=getAuth(app)
export const AuthContext=createContext(null)

   

const Provider = ({children}) => {
     
    const [user,setUser]=useState(null)
   const[loading,setLoading]= useState(true);
   const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
   }



   const userInfo={
    user,
    loading,
    createUser,

   }

    return (
       <AuthContext.Provider value={userInfo} >
        {children}
            
        </AuthContext.Provider>
    );
};

export default Provider;