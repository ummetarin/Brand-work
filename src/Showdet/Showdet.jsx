import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import { SignInMethod } from 'firebase/auth';


const Showdet = () => {
  const data=useLoaderData()
  // console.log(data);
  const cardData={
    image:data.Image,
    price:data.Price,
    Showdes:data.Showdes,
    name:data.Name,
  }
  console.log(cardData);

  let [dogImage, setDogImage] = useState([])

  // 3. Create out useEffect function

const handleaddcard=()=>{
  fetch("http://localhost:5000/dataforcard",{
    method: 'POST', 
    
    headers:{
      'Content-Type': 'application/json',
    } , 
    body: JSON.stringify(cardData),

  })
  .then(response => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
  .then(data => setDogImage(data.message))
}


  
console.log(dogImage);

    return (
        <div>
        {
          
<div className=' font-bold'>
            <div className="card card-compact w-[1400px] h-[900px]  shadow-xl mt-14 mx-auto">
             <figure><img className='w-[800px] h-[700px] mx-auto' src={data.Image} alt="Shoes" /></figure>
             <div className="card-body">
            <h1 className='text-xl mt-4 '>{data.Name}</h1>    
            <h1 className='text-xl mt-2 '>Price:{data.Price}</h1>
            <h1 className='text-xl mt-2'>{data.Showdes}</h1>
            <div className="card-actions justify-end font-bold ">
           
            <div>
            <button onClick={handleaddcard} className='bg-red-500  text-1xl rounded-md text-2xl  btn'>Add to cart</button>
           </div>
           
         
    </div>
  </div>
</div>
        </div>
        }


        </div>
    );
};

export default Showdet;