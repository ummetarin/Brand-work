import React from 'react';

const Section2 = () => {


   
    return (
        <div className='text-2xl font-bold mt-24 '>
            <h1 className='mt-2 text-6xl text-center text-cyan-950 mb-12'>The Brands That We Are Working</h1>
            <div className='flex lg:flex-row  md:flex-row flex-col j justify-around mt-6'>
     <div className='flex lg:flex-row  md:flex-row flex-col lg:gap-24 md:gap-24 gap-3 lg:ml-1 md:ml-1 ml-60'>
        <div>
         <img className='w-24 h-24 rounded-full lg:mb-1 md:mb-1 ' src="/image/Nikelogo.png" alt="" />
        </div>
        <div>
        <h1 className='lg:mt-6 md:mt-6 mt-1'>NIKE Brands</h1>
        </div>
     </div>
     <div className='flex lg:flex-row  md:flex-row flex-col lg:gap-24 md:gap-24 gap-3 lg:ml-1 md:ml-1 ml-60 '>
        <div>
        <img className='w-24 h-24 rounded-full' src="/image/adidaslogo.png" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>ADIDAS Brands</h1>
        </div>
     </div>
</div>
<div className='flex lg:flex-row  md:flex-row flex-col j justify-around mt-6'>
     <div className='flex lg:flex-row  md:flex-row flex-col lg:gap-24 md:gap-24 gap-3 lg:ml-1 md:ml-1 ml-60  '>
        <div>
         <img className='w-24 h-24 rounded-full' src="/image/gucccilogo.jpg" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>Gucci Brands</h1>
        </div>
     </div>
     <div className='flex lg:flex-row  md:flex-row flex-col lg:gap-32 md:gap-32 gap-3 lg:ml-1 md:ml-1 ml-60 '>
        <div>
        <img className='w-24 h-24 rounded-full' src="/image/levislogo.png" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>LEVIS Brands</h1>
        </div>
     </div>
</div>
<div className='flex lg:flex-row  md:flex-row flex-col j justify-around mt-6'>
     <div className='flex lg:flex-row  md:flex-row flex-col lg:gap-24 md:gap-24 gap-3 lg:ml-1 md:ml-1 ml-60 '>
        <div>
         <img className='w-24 h-24 rounded-full' src="/image/zaralogo.jpg" alt="" />
        </div>
        <div>
        <h1 className='mt-6'>ZARA Brands</h1>
        </div>
     </div>
     <div className='flex lg:flex-row  md:flex-row flex-col lg:gap-28 md:gap-28 gap-3 lg:ml-1 md:ml-1 ml-60 '>
        <div>
        <img className='w-24 h-24 rounded-full' src="/image/HMlog.png" alt="" />
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