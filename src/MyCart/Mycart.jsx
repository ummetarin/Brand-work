import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Carddlt from './carddlt';
import Swal from 'sweetalert2';



const Mycart = () => {

 const data=useLoaderData();
 const[set,dataSet]=useState(data);


 
 const handledlt=_id=>{
  console.log(_id);
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      //   Swal.fire(
      //     'Deleted!',
      //     'Your file has been deleted.',
      //     'success'
      //   )
      fetch(`http://localhost:5000/dataforcard/${_id}`,{
          method:"DELETE"

      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            const fil = set.filter(get => get._id != _id)
            dataSet(fil)

          Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
          }
      })

      }
    })
   
 }




 
    return (
       
    <div className='mt-24 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16 lg:ml-44 md:ml-44  '>
          {
            set.map(da=><Carddlt key={da.Id} handledlt={handledlt} data={da}></Carddlt>)
          }
        </div>
    
    );
};

export default Mycart;
