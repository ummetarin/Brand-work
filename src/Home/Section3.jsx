import React from 'react';

const Section3 = () => {
    return (
      <div className=''>
            <h1 className='text-7xl mt-24 text-center text-blue-900 font-bold'> Some Watches Collection</h1>
               <div className='flex lg:flex-row md-flex-row flex-col gap-5 lg:ml-12 md:ml-12 ml-16 mt-24 justify-center '>
               <div className='' >
               <div className=''>
                <img className='w-[450px] h-[400px] shadow-lg rounded-lg' src="/image/watch1.jpg" alt="" />
               </div>
               <div className='mt-4'>
                 <img className='w-[450px] h-[400px] shadow-lg rounded-lg' src="/image/watch2.jpg" alt="" />
               </div>
               </div>
               <div>
               <div>
                <img className='w-[450px] h-[400px] shadow-lg rounded-lg' src="/image/watch3.jpg" alt="" />
               </div>
               <div className='mt-4'>
                 <img className='w-[450px] h-[400px] shadow-lg rounded-lg' src="/image/watch4.jpeg" alt="" />
               </div>
               </div>
               </div>
           </div>
    );
};

export default Section3;