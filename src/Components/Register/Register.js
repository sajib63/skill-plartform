import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import image from './image/93385-login (1).gif'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';


const Register = () => {
    const { createUser, googleSignIn, gitSignIn, updateCurrentUser } = useContext(AuthContext);


    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.Password.value;


        // create user 
        createUser(email, password)
            .then(result => {
                toast.success('success')
                updateProfile(name, photoURL)
                form.reset();

            })
            .catch(error => {

                toast.error(error.message)

                form.reset();
            })

    }
    // google submit 
    const googleSubmit = () => {
        googleSignIn()
            .then((result) => {
               
                toast.success('success')

            })
            .catch(error => {
                const message = error.message;
                toast.error(message);
            })
    }


    // git submit 
    const gitsubmit = () => {
        gitSignIn()
            .then(result => {
                toast.success('success')
            })
            .catch(error => {
                const message = error.message;
                toast.error(message);

            })
    }




    // update user 
    const updateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateCurrentUser(profile)
            .then(() => {

            })
            .catch(error => console.log(error))

    }







    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>
              
              <div className="shadow-2xl rounded">
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
                            <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
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
                <div className=' rounded bg-white flex justify-center items-center'>
                    <button onClick={googleSubmit} className="mt-2">
                        <FaGoogle className='mr-4 text-3xl text-lime-600'></FaGoogle>
                    </button>
                    <button onClick={gitsubmit}>
                        <FaGithub className='text-3xl text-lime-600'></FaGithub>
                    </button>

                </div>

              </div>
              
            </div>


        </div>
    );
};

export default Register;