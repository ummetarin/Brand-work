import React from 'react';

const Banner = () => {
    return (
        <div>
            <img className='mx-auto w-full absolute ' src="/image/bannerpic.jpg" alt="" />
            <button className=' relative text-3xl font-bold bg-red-800 mx-auto lg:mt-[600px] md:mt-[600px] mb-[200px] text-white btn'> Lets Buy</button>
        </div>
    );
};

export default Banner;