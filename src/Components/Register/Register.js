import React from 'react';
import { Link } from 'react-router-dom';
import image from './image/93385-login (1).gif'

const Register = () => {

    const handleCreateUser=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const PhotoURL=form.PhotoURL.value;
        const Password=form.Password.value;
        console.log(name, email, PhotoURL, Password);

    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>
                <form onSubmit={handleCreateUser} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full-Name" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='PhotoURL' placeholder="PhotoURL" className="input input-bordered" />
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
                            <input type="Password" name='Password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>If You Have Any Account ? Please  <Link to='/login' className='text-lime-500'>Login</Link></p>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            
                            <button className="btn bg-lime-400 text-black border-0 hover:bg-lime-400">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;