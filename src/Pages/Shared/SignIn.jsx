import React, { use } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';

const SignIn = () => {
const {signInUser} = use(AuthContext)
    const handleSignIn = e =>{
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
// sign in user
    signInUser(email, password)
    .then(result=>{
      // console.log(result.user);
            if(result.user){
              Swal.fire({
  position: "top-end",
  icon: "success",
  title: "sign in successfully",
  showConfirmButton: false,
  timer: 1500
})
}
    })
    .catch(error=>{
      console.log(error);
      
    })
        }
    return (
<div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left"> 

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignIn now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign in</button>
        </form>
        <SocialLogin/>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;