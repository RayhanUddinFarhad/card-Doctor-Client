import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../provdier/AuthProvider';

const LogIn = () => {

    const {user, login} = useContext(AuthContext)

    console.log (user)


    const handleLogIn = (e) => {

      e.preventDefault();

      const form = e.target;
      
      const email = form.email.value;

      const password = form.password.value;


      login (email, password)
      .then ((res) => {


        const logged = res.user;
      })

      .catch ((err) => { 


        console.log (err)
      })
      

      
      

     }











    return (
        <div>
            


            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="button-primary">Login</button>
        </div>

        <p>New ro CarDoctor? <Link to = "/Register" className='btn-link'>Register</Link></p>
      </Form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;