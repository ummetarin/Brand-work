import React from 'react';
import { Link } from 'react-router-dom';

const CardDAta = ({card}) => {
    console.log(card);
    const {id,name,image}=card || {}
 console.log(name);
    return (
        <div>
        
<div className=' font-bold lg:ml-1 md:ml-2 ml-12'>
            <div className="card card-compact w-[450px] h-[450px]  shadow-xl">
             <figure><img className='w-[650px] h-[350px]' src={image} alt="" /></figure>
             <div className="card-body">
            <h1 className='text-4xl mt-4 text-center '>{name} Brand</h1> 
            <div className='mx-auto mt-2'>
           <Link to={`/detailsdata/${name}`}> <button className='bg-red-500  text-2xl rounded-md  text-white btn'>Detals</button></Link>
          </div>   
            
          
  </div>
</div>
        </div>
        </div>
    );
};

export default CardDAta;