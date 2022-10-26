import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import image from './image/38435-register.gif.crdownload'


const Login = () => {
const {loginUser}=useContext(AuthContext);
    const handleLoginUser=event=>{
        event.preventDefault();
        const form=event.target;
      
        const email=form.email.value;
        
        const password=form.password.value;
        loginUser(email, password)
        .then(result=>{
            toast.success('successfully Login')
            form.reset();

        })
        .catch(error=>{
            const message=error.message;
            toast.error(message)
            form.reset();
        }
            )

    }
    return (
        <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <img src={image} alt="" />
            </div>
            <form onSubmit={handleLoginUser} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">

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
                        <input type="Password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p>If You Don't Have Any Account ? Please  <Link to='/register' className='text-lime-500'>Register</Link></p>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        
                        <button className="btn bg-lime-400 text-black border-0 hover:bg-lime-400">Log-In</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;