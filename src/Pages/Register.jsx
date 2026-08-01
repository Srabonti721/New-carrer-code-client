import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider'
// import registerLottie  from '../assets/lotties/Register (1).json';
// import Lottie from 'lottie-react';

const Register = () => {
    const {createUser} = use(AuthContext)

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  // create users
    createUser(email, password)
    .then(result=>{

      console.log(result.user);
      
    })
    .catch(error=>{
      console.log(error);
      
    })

  }
    return (
<div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left"> 
{/* <Lottie style={{width:"200px"}} loop={true} animationData={registerLottie}/> */}
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;