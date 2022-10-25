import React from 'react';
import image from './image/78813-student.gif'

const Home = () => {
    return (
        <div className="hero min-h-screen bg-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
            
              
                <div className=''>
                    <h1 className="text-5xl font-bold">Now learning from anywhere, and build your  <span className='text-lime-500'>bright career.</span></h1>
                    <p className="py-6 text-3xl text-lime-500">Start your course</p>
                    <button className="btn bg-lime-400 text-black border-0 hover:bg-lime-400 mr-4">Register</button>

                    <button className="btn bg-lime-400 text-black border-0 hover:bg-lime-400">Login</button>
                </div>

                <div className=''>
               <img src={image} className="" />
               </div>
               
            </div>
        </div>
    );
};

export default Home;