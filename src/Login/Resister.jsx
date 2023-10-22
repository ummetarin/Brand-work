import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/Provider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';



const Resister = () => {

  const Location=useLocation();
  const Navigation=useNavigate();

  const {createUser,signin,googlesignin}=useContext(AuthContext);
 

  // const {signUp}=useContext(AuthContext);
  // const[email,setEmail]=useState("");
  // const[password,setPassword]=useState("");
  // const[error,setError]=useState("")
  // const{googlesignin}=useContext(AuthContext)
   const handlres=e=>{
        
       // if(!/^(?=.*[a-z])(?=.*![A-Z])(?=.*\d)(?=.*![@$!%*?&])[A-Za-z\d@$!%*?&]{,6}$/.test(password)){
       //    setError('Less then 6,no Upper case,no Special charater');
       // }
       e.preventDefault();
       const email=e.target.email.value;
       const password=e.target.password.value;
       signin(email,password).
       then(res=>{
         console.log(res.user);
         Swal.fire('loged in!')
          {Location.state?Navigation(location.state):Navigation("/")}
       }
       )
        .catch(err=>{
         console.log(err);
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Something went wrong!',
         })
        })   
    }

    const handlegogle=()=>{
        googlesignin().then((result)=>{
         console.log(result.user);

        })
 }

    return (
        <div>
        <div className="hero mt-8 h-[400px] ">
        <div className="card  w-full max-w-sm shadow-2xl">
          <form  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input  type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input   type="password" name='password' placeholder="password" className="input input-bordered" required />
             
            </div>
            <div className="form-control mt-6">
              <button onClick={handlres} className="btn bg-red-600 text-white">Resister</button>
            </div>
    
            <div className="form-control mt-6">
              <button onClick={handlegogle} className="btn bg-red-600 text-white">Google Login</button>
            </div>
          </form>
        </div>
    </div>
    
    
    
            </div>
    );
};

export default Resister;