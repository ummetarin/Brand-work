import React from 'react';

const EachShow = ({data}) => {
    console.log(data);
    const {ID,Image,Name,BrandName,Type,Price,Rating,Showdes} = data||{}
    console.log(ID);

   
    return (
        <div>
            <div className=' font-bold'>
            <div className="card card-compact w-[400px] h-[500px] bg-base-300 shadow-xl">
             <figure><img className='w-[350px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyWouiPHFwiPWshIbGXRyREYSICyWWmDt-TyYvLQc&s" alt="Shoes" /></figure>
             <div className="card-body">
            <h1 className='text-xl mt-4 '>Name:</h1>    
            <h1 className='text-xl mt-2 '>Price:</h1>
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

export default EachShow;