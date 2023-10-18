import React from 'react';

const Addcard = () => {
    return (
        <div>
             <div className='bg-gray-500 pb-24 mt-24 font-bold'>
            <h1 className='font-extrabold text-center lg:text-5xl md:text-4xl text-2xl pt-16'>Add New Element In The Card</h1>
          <form>         
          <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
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
             <span className='w-24'>Quantity</span>
              <input type="text" name='Quantity' placeholder="Quantity" className="input input-bordered  lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
         </div>
         <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group  ">
             <span className='w-24'>Colors</span>
              <input type="text" name='Colors' placeholder="Color" className="input  input-bordered lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group">
             <span className='w-24'>Price</span>
              <input type="text" name='Price' placeholder="Quantity" className="input input-bordered  lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
         </div>
         <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-14 '>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group   ">
             <span className='w-24'>ID</span>
              <input type="text" name='ID' placeholder="Name" className="input  input-bordered lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
             <div className="form-control">
              <label className="label">
              <span className="label-text">Username</span>
              </label>
              <label className="input-group">
             <span className='w-24'>Chef</span>
              <input type="text" name='Chef' placeholder="Chef" className="input input-bordered  lg:w-[600px] md:w-[600px] w-[400px]" />
            </label>
             </div>
         </div>
         <div className="form-control mt-4">
              <label className="label">
              </label>
              <label className="input-group">
             <span className='w-24 ml-24 '>url</span>
              <input type="text" name='photo' placeholder="photo" className="input input-bordered  lg:w-[1300px] md:w-[600px] w-[400px]" />
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