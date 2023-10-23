import React, { useContext } from 'react';
import Navlink from './Navlink';
import { AuthContext } from '../Provider/Provider';


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)
    console.log(user);


    const handlelogout=()=>{
      logOut().then()
    }
    return (
        <div className='flex lg:flex-row md:flex-row flex-col py-7 shadow-lg justify-around '>
           <div className='flex lg:flex-row md:flex-row flex-col font-bold gap-2 lg:ml-1 md:ml-1 ml-44'>
           <img className='w-52 h-24' src="/image/fas.png" alt="" />
           <h1 className='text-3xl mt-4 text-rose-600 '>Fashion Brand</h1>
           </div>
          <div className=''>
           <Navlink></Navlink>
          </div>
          <div className='flex lg:flex-row md:flex-row flex-col mt-4 '>
            <div>
                <img className='h-14 w-14 lg:ml-1 md:ml-1 ml-64 rounded-full' src="/image/logoim.jpg" alt="" />
            </div>
          <div>
            <p>{user?.email}</p>
            {user&&<button onClick={handlelogout} className='btn bg-red-500 text-white lg:ml-1 md:ml-1  ml-60'>Sign Out </button>}
            
            <button className='btn bg-red-500 text-white lg:ml-1 md:ml-1  ml-60'>Sign In </button>
          </div>
        </div>
        </div>
    );
};

export default Navbar;