import React from 'react';

const EachData = ({data}) => {

    console.log(data);
    const {Image,Name,BrandName,Type,Price,Rating} = data||{}

    return (
        <div>
            

<div className=' font-bold'>
            <div className="card card-compact w-[400px] h-[600px] shadow-xl">
             <figure><img className='w-[400px] h-[400px]' src={data.Image} alt="Shoes" /></figure>
             <div className="card-body">
            <h1 className='text-xl mt-4 '>{data.Name}</h1>    
            <h1 className='text-xl mt-2 '>{data.BrandName}</h1>
            <h1 className='text-xl mt-2 '>Price:{data.Price}</h1>
            <h1 className='text-xl mt-2'>{data.Type}</h1>
            <h1 className='text-xl mt-2'>{data.Rating}</h1>
            <div className="card-actions justify-center">
           <div className='flex flex-row gap-6 mt-4'>
           <div>
            <button className='bg-red-500 text-white  text-2xl rounded-md  btn'>Details</button>
          </div>
          <div>
            <button className='bg-red-500 text-white text-2xl rounded-md  btn'>Update</button>
         </div>
         </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default EachData;