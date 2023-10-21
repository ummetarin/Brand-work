import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';

const Login = () => {

   const {createUser}=useContext(AuthContext);
   const{googlesignin}=useContext(AuthContext)
   console.log(googlesignin());

   const handlelogin=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    createUser(email,password)
    .then(result =>{
      console.log(result.user);
      const createAt=result?.user?.metadata?.creationTime;

      const user={email,createAt:createAt}
      fetch ('http://localhost:5000/user',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body :JSON.stringify(user),
          
    })
          .then(res=>res.json())
          .then(data=>{
          if(data.insertedId){
            alert('a')
          }
})

  })

     
      .catch(error =>{
       console.error(error);
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
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-600 text-white">Login</button>
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

export default Login;