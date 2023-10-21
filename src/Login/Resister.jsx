import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/Provider';

const Resister = () => {
   const {signUp}=useContext(AuthContext);
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   const[error,setError]=useState("")
   const{googlesignin}=useContext(AuthContext)
   console.log(googlesignin());
    const handlres=()=>{
         
        if(!/^(?=.*[a-z])(?=.*![A-Z])(?=.*\d)(?=.*![@$!%*?&])[A-Za-z\d@$!%*?&]{,6}$/.test(password)){
           setError('Less then 6,no Upper case,no Special charater');
        }
        else{
            setError("")
            if(email){
                signUp(email,password).then(res=>console.log(res.user))
            }
        }


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
                <p>{error}</p>
                <span className="label-text">Email</span>
              </label>
              <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input  onChange={(e)=>setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered" required />
             
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