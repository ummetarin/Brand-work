import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Mycart = () => {
    const data=useLoaderData()
    console.log(data);
  
    return (
        <div>
            <div className=' font-bold'>
            <div className="card card-compact w-[400px] h-[500px] bg-base-300 shadow-xl">
             <figure><img className='w-[350px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyWouiPHFwiPWshIbGXRyREYSICyWWmDt-TyYvLQc&s" alt="Shoes" /></figure>
             <div className="card-body">
            <h1 className='text-xl mt-4 '>Name:</h1>    
            <h1 className='text-xl mt-2'>Id</h1>
            <h1 className='text-xl mt-2'>quantity</h1>
            <h1 className='text-xl mt-2'>taste</h1>
            <div className="card-actions justify-center">
           <div className='flex flex-row gap-6 mt-4'>
            <div>
            <button className='bg-red-500  text-1xl rounded-md  btn'>Added</button>
           </div>
           <div>
            <button className='bg-red-500  text-1xl rounded-md  btn'>Detals</button>
          </div>
          <div>
            <button className='bg-red-500  text-1xl rounded-md  btn'>Delete</button>
         </div>
         </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Mycart;