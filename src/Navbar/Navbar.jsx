import React from 'react';
import Navlink from './Navlink';


const Navbar = () => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col py-7 shadow-lg justify-around '>
           <div className='flex lg:flex-row md:flex-row flex-col font-bold gap-2'>
           <img className='w-52 h-24' src="/public/image/fas.png" alt="" />
           <h1 className='text-3xl mt-4 text-rose-600 '>Fashion Brand</h1>
           </div>
          <div className=''>
           <Navlink></Navlink>
          </div>
          <div className='flex lg:flex-row md:flex-row flex-col mt-4'>
            <div>
                <img className='h-14 w-14 rounded-full' src="/public/image/logoim.jpg" alt="" />
            </div>
          <div>
            <button className='btn bg-red-500 text-white'>Sign In </button>
          </div>
        </div>
        </div>
    );
};

export default Navbar;