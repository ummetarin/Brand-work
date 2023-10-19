import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = () => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col mt-4 gap-6 text-2xl font-bold lg:ml-1 md:ml-1 ml-60'>
       <div>
       <NavLink
        to="/"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-red-600 underline" : ""
           }
>
         Home
       </NavLink>
       </div>

       <div>
       <NavLink
        to="/addcart"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-red-600 underline" : ""
           }
>
         Add Card
       </NavLink>
       </div>
       
       <div>
       <NavLink
        to="/log"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-red-600 underline" : ""
           }
>
         Login
       </NavLink>
       </div>
    
       <div>
       <NavLink
        to="/mycart"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-red-600 underline" : ""
           }
>
         My Cart
       </NavLink>
       </div>
       <div>
       <NavLink
        to="/cont"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-red-600 underline" : ""
           }
>
         Contruct
       </NavLink>
       </div>
       <div>
       <NavLink
        to="/over"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-red-600 underline" : ""
           }
>
         Overview
       </NavLink>
       </div>
        </div>
    );
};

export default Navlink;