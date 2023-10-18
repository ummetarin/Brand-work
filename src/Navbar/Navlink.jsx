import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = () => {
    return (
        <div>
       <div>
       <NavLink
        to="/"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "bg-red-600 underline" : ""
           }
>
         Home
       </NavLink>;
       </div>

       <div>
       <NavLink
        to="/addcart"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "bg-red-600 underline" : ""
           }
>
         Add Card
       </NavLink>;
       </div>
       
       <div>
       <NavLink
        to="/log"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "bg-red-600 underline" : ""
           }
>
         Login
       </NavLink>;
       </div>
    
       <div>
       <NavLink
        to="/mycart"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "bg-red-600 underline" : ""
           }
>
         My Cart
       </NavLink>;
       </div>
       <div>
       <NavLink
        to="/cont"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "bg-red-600 underline" : ""
           }
>
         Contruct
       </NavLink>;
       </div>
       <div>
       <NavLink
        to="/over"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "bg-red-600 underline" : ""
           }
>
         Overview
       </NavLink>;
       </div>
        </div>
    );
};

export default Navlink;