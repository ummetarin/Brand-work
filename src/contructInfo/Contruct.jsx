import React from 'react';

const Contruct = () => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 pb-44 '>
            {/*  */}
     <div>
              
     <div className='w-[1100px] h-[400px]'>
             <div className='bg-blue-400 pb-24 mt-24 font-bold'>
            <h1 className='font-extrabold lg:pl-1 md:pl-3 pr-[470px] text-center lg:text-5xl md:text-4xl text-2xl pt-16 pb-12'>Contruct With Us</h1>
          <form>         
          <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
             <div className="form-control">
              <label className="label">
             
              </label>
              <label className="input-group lg:ml-1 md:ml-1 ml-44 ">
             <span className='w-24'>Email</span>
              <input type="text"  placeholder="" className="input  input-bordered lg:w-[300px] md:w-[300px] w-[200px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
             
              </label>
              <label className="input-group lg:ml-1 md:ml-1 ml-44">
             <span className='w-24'>Facebook</span>
              <input type="text"  placeholder="" className="input input-bordered  lg:w-[300px] md:w-[300px] w-[200px]" />
            </label>
             </div>
         </div>
         <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
             <div className="form-control">
              <label className="label">
             
              </label>
              <label className="input-group lg:ml-1 md:ml-1 ml-44 ">
             <span className='w-24'>Whats app</span>
              <input type="text" placeholder="" className="input  input-bordered lg:w-[300px] md:w-[300px] w-[200px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
             
              </label>
              <label className="input-group lg:ml-1 md:ml-1 ml-44">
             <span className='w-24'>Number</span>
              <input type="text"  placeholder="" className="input input-bordered  lg:w-[300px] md:w-[300px] w-[200px]" />
            </label>
             </div>
         </div>
         <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
             <div className="form-control">
              <label className="label">
             
              </label>
              <label className="input-group lg:ml-1 md:ml-1 ml-44  ">
             <span className='w-24'>Instragram</span>
              <input type="text"  placeholder="" className="input  input-bordered lg:w-[300px] md:w-[300px] w-[200px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
             
              </label>
              <label className="input-group lg:ml-1 md:ml-1 ml-44">
             <span className='w-24'>Time</span>
              <input type="text"  placeholder="" className="input input-bordered  lg:w-[300px] md:w-[300px] w-[200px]" />
            </label>
             </div>
         </div>
        

          <div className='mt-24 lg:ml-80 md:ml-80 ml-36' >
            <button className='text-3xl bg-red-800 w-96 h-16  text-white  rounded-lg '>Contruct</button>
          </div>
          </form>
        </div>
        </div>
     </div>
     <div className='lg:mt-44 md:mt-52 mt-[550px]  lg:ml-1 md:ml-1 ml-44'>
        <img className='rounded-full w-[250px] h-[350px]' src="/image/bagu.jpg" alt="" />
     </div>
        </div>
    );
};

export default Contruct;