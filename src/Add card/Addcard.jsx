import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2';

const Addcard = () => {

    const handlebrand=event=>{
              event.preventDefault();
              const form=event.target;
               const name=form.Name.value;
               const brand=form.brand.value;
               const Type=form.Type.value;
               const Price=form.Price.value;
               const sortds=form.sortds.value;
               const Rating=form.Rating.value;
               const Image=form.Image.value;
           const newbrand={name,brand,Type,Price,sortds,Rating,Image};
           console.log(newbrand);
          
           fetch('https://as-ten-server.vercel.app/dataforall',{
               method:'POST',
               headers:{
                'content-type':'application/json'
               },
               body:JSON.stringify(newbrand),

           }
           )
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The Product is added',
                showConfirmButton: false,
                timer: 1500
              })
            }
           })


            }

    return (
        <div>


        {/* form */}
             <div className='bg-gray-500 pb-24 mt-24 font-bold'>
            <h1 className='font-extrabold text-center lg:text-5xl md:text-4xl text-2xl pt-16'>Add New Element In The Card</h1>
          <form onSubmit={handlebrand}>         
          <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 mt-12'>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group  ">
             <span className='w-24'>Name</span>
              <input type="text" name='Name' placeholder="Name" className="input  input-bordered lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group">
             <span className='w-24'>Brand Name</span>
              <input type="text" name='brand' placeholder="Brand Name" className="input input-bordered  lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
         </div>
         <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group  ">
             <span className='w-24'>Type</span>
              <input type="text" name='Type' placeholder="Type" className="input  input-bordered lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group">
             <span className='w-24'>Price</span>
              <input type="text" name='Price' placeholder="Price" className="input input-bordered  lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
         </div>
         <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group   ">
             <span className='w-24'>Shortdes</span>
              <input type="text" name='sortds' placeholder="Short description" className="input  input-bordered lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group">
             <span className='w-24'>Rating</span>
              <input type="text" name='Rating' placeholder="Rating" className="input input-bordered  lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
         </div>
         <div className="form-control mt-4">
              <label className="label">
              </label>
              <label className="input-group">
             <span className='w-24 lg:ml-4 md:ml-4'>Image</span>
              <input type="text" name='Image' placeholder="Image" className="input input-bordered  lg:w-[1500px] md:w-[800px] w-[800px]" />
            </label>
             </div>

          <div className='mt-24 lg:ml-[620px] md:ml-[300px] ml-24 ' >
            <button className='btn text-3xl bg-red-800 w-96 text-white  rounded-lg '>Submit</button>
          </div>
          </form>
        </div>
        </div>
    );
};

export default Addcard;