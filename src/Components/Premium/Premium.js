import React from 'react';
import toast from 'react-hot-toast';
import { FaReadme, FaStar, FaStarHalfAlt, FaStopwatch } from 'react-icons/fa';

import { Link, useLoaderData } from 'react-router-dom';

const Premium = () => {
    const allData = useLoaderData();
  
 const handleSubmit=()=>{
    toast.success('successfully Purchase')
 }
    const {

        course_thumb,
        advance_price,
        details,
        instructor_img,
        instructor_name,
        lectures,
        rating,
        subject,
        title,
        watch_time,
    } = allData.advance[0];
    return (
        <div>
            <div className="card lg:card-side bg-base-100 lg:w-6/12 shadow-xl mx-2 lg:mx-auto mt-10">
            <figure className="lg:w-6/12 ">
                <img className="h-full" src={course_thumb} alt="Album" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between text-center items-center">
                    <div className="flex text-center items-center justify-center">
                        <img
                            src={instructor_img}
                            className="w-10 h-10 lg:w-20 lg:h-20 rounded-full"
                            alt=""
                        />
                        <p className="ml-3">{instructor_name}</p>
                    </div>

                    <div>
                        <p className='text-lime-700'>{subject}</p>
                    </div>
                </div>
                <h2 className="card-title mt-5 text-lime-600">{title}</h2>

                <div className="my-4 mt-5 flex justify-between items-center text-lg font-medium">

                    <div className='justify-center items-center flex gap-3'>
                        <FaStopwatch className='text-lime-600 text-2xl'></FaStopwatch>
                        <p className=''>{watch_time}</p>
                    </div>

                    <div className='justify-center items-center flex gap-3'>
                        <FaReadme className='text-lime-600 text-2xl'></FaReadme>
                        <p>{lectures}</p>

                    </div>
                </div>



                <div className="flex justify-between">
                    <div>
                        <p className='text-2xl'><span className='text-lime-600 '>$</span> {advance_price}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className='lg:text-2xl'>{rating}</p>
                        <p className='lg:text-2xl text-lime-600'><FaStar></FaStar></p>
                        <p className='lg:text-2xl text-lime-600'><FaStar></FaStar></p>
                        <p className='lg:text-2xl text-lime-600'><FaStar></FaStar></p>
                        <p className='lg:text-2xl text-lime-600'><FaStar></FaStar></p>
                        <p className='lg:text-2xl text-lime-600'><FaStarHalfAlt></FaStarHalfAlt></p>
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-5">
                    
                    <Link ><button onClick={handleSubmit} className="btn bg-lime-600 border-0">Premium Purchase</button></Link>
                </div>
            </div>
        </div>
        <div className="card  w-90 bg-base-100 shadow-2xl lg:w-6/12 lg:mx-auto mt-10 mb-10">
                <div className="card-body">
                    <h2 className="card-title text-lime-700 font-bold">{subject}</h2>
                    <p className=' lg:text-2xl'>{details}</p>
                    
                </div>
        </div>
        </div>
    );
};

export default Premium;