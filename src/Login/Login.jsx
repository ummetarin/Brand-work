import React from 'react';

const Login = () => {
    return (
        <div>
        

    <div className="hero mt-8 h-[400px] ">
    <div className="card  w-full max-w-sm shadow-2xl">
      <form className="card-body">
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
      </form>
    </div>
</div>



        </div>
    );
};

export default Login;