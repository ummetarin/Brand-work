import React from 'react';

const Section2 = () => {
    return (
        <div className='text-2xl font-bold mt-24'>
            <h1 className='mt-2 text-6xl text-center text-cyan-950 mb-12'>The Brands That We Are Working</h1>
            <div className='flex lg:flex-row  md:flex-row flex-col j justify-around mt-6'>
     <div className='flex lg:flex-row  md:flex-row flex-col gap-24 '>
        <div>
         <img className='w-24 h-24 rounded-full lg:mb-1 md:mb-1 ' src="/public/image/Nikelogo.png" alt="" />
        </div>
        <div>
        <h1 className='lg:mt-6 md:mt-6 mt-1'>NIKE Brands</h1>
        </div>
     </div>
     <div className='flex lg:flex-row  md:flex-row flex-col gap-24 lg:mt-1 md:mt-2 '>
        <div>
        <img className='w-24 h-24 rounded-full' src="/public/image/adidaslogo.png" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>ADIDAS Brands</h1>
        </div>
     </div>
</div>
<div className='flex lg:flex-row  md:flex-row flex-col j justify-around mt-6'>
     <div className='flex lg:flex-row  md:flex-row flex-col gap-24 '>
        <div>
         <img className='w-24 h-24 rounded-full' src="/public/image/gucccilogo.jpg" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>Gucci Brands</h1>
        </div>
     </div>
     <div className='flex lg:flex-row  md:flex-row flex-col gap-32'>
        <div>
        <img className='w-24 h-24 rounded-full' src="/public/image/levislogo.png" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>LEVIS Brands</h1>
        </div>
     </div>
</div>
<div className='flex lg:flex-row  md:flex-row flex-col j justify-around mt-6'>
     <div className='flex lg:flex-row  md:flex-row flex-col gap-24 '>
        <div>
         <img className='w-24 h-24 rounded-full' src="/public/image/zaralogo.jpg" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>ZARA Brands</h1>
        </div>
     </div>
     <div className='flex lg:flex-row  md:flex-row flex-col gap-28'>
        <div>
        <img className='w-24 h-24 rounded-full' src="/public/image/HMlog.png" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>H & M Brands</h1>
        </div>
     </div>
</div>
        </div>
    );
};

export default Section2;