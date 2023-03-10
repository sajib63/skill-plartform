
import React from 'react';
import { Link } from 'react-router-dom';



import image from './image/78813-student.gif'

const Home = () => {
    return (

        <>


            <div className="hero min-h-screen bg-white ">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className=''>

                        <div >
                            <h1 className="text-5xl font-bold text-center">Now learning from anywhere, and build your  <span className='text-lime-500 text-center'>bright career.</span></h1>
                            <p className="py-6 text-3xl text-lime-500 text-center">Start your course</p>
                           <div className='flex justify-center'>
                           <Link to='/register'>
                                <button className="btn bg-lime-300 text-black border-0 hover:bg-lime-400 mr-4">Register</button></Link>

                            <Link to='/login'>
                                <button className="btn bg-lime-400 text-black border-0 hover:bg-lime-400">Login</button></Link>
                           </div>
                        </div>
                    </div>

                    <div className=''>
                        <img src={image} />
                    </div>

                </div>

            </div>


        </>





    );
};

export default Home;