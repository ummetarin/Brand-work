import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate } from 'react-router-dom';

const PR = ({children}) => {
    const {user}=useContext(AuthContext);
    console.log(user);

if(user){
    children;
}
return <Navigate to={'/res'} replace></Navigate>
    
};

export default PR;