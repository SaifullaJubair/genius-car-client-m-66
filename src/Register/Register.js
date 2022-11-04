import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';


const Register = () => {
   const { createUser } = useContext(AuthContext)
   const handleRegister = event => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value
      const email = form.email.value;
      const password = form.password.value;

      createUser(email, password)
         .then(res => {
            const user = res.user
            console.log(user);
            form.reset()
         })
         .catch(e => console.error(e))
   }


   return (
      <div className='hero w-full my-20'>
         <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
               <img src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleRegister} className="card-body">
                  <h1 className="text-5xl text-center font-bold">Sign Up</h1>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Full Name</span>
                     </label>
                     <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name='password' placeholder="password" className="input input-bordered" />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <input className="btn btn-primary" type="submit" value="Sign Up" />
                  </div>
                  <p>Already have an account? <Link className='text-orange-600' to='/login'><button className='btn btn-link'>Log In</button></Link></p>

               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;