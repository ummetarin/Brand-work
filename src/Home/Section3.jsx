import React from 'react';

const Section3 = () => {
    return (
      <div>
            <h1 className='text-4xl text-center text-blue-900 font-bold  mt-12'> Some Watches Collection</h1>
               <div className='flex lg:flex-row md-flex-row flex-col gap-5 mt-12 justify-center lg:ml-1 md:ml-1 ml-24'>
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