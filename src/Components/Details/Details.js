import React from 'react';
import { FaReadme, FaStar, FaStarHalfAlt, FaStopwatch } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Details = () => {
    const allData = useLoaderData();
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10,8]
    };

    const {

        course_thumb,
        basic_price,
        id,
        instructor_img,
        instructor_name,
        lectures,
        rating,
        subject,
        title,
        watch_time,
    } = allData;
    return (

        <div ref={ref} className="card mx-4 lg:card-side bg-base-100 lg:w-6/12 shadow-xl lg:mx-auto mt-10">
            <figure className="lg:w-6/12 ">
                <img className="h-full" src={course_thumb} alt="Album" />
            </figure>

            <div className="card-body">
                <div className="flex justify-between text-center items-center">
                    <div className="flex text-center  items-center  justify-center">
                        <img
                            src={instructor_img}
                            className="w-10 h-10  lg:w-20  lg:h-20 rounded-full"
                            alt=""
                        />
                        <p className="ml-3 text-sm lg:text-lg">{instructor_name}</p>
                    </div>

                    <div>
                        <p className='text-lime-600  lg:text-2xl '>{subject}</p>
                    </div>
                </div>
                <h2 className="card-title mt-5 text-lime-600">{title}</h2>

                <div className="my-4 mx-4 mt-5 flex justify-between items-center text-lg font-medium">

                    <div className='justify-center items-center flex gap-3'>
                        <FaStopwatch className='text-lime-600 lg:text-2xl'></FaStopwatch>
                        <p className='text-sm lg:text-2xl '>{watch_time}</p>
                    </div>

                    <div className='justify-center items-center flex gap-3'>
                        <FaReadme className='text-lime-600 lg:text-2xl'></FaReadme>
                        <p className='text-sm lg:text-2xl'>{lectures}</p>

                    </div>
                </div>



                <div className="flex justify-between">
                    <div>
                        <p className='lg:text-2xl'><span className='text-lime-600 '>$</span> {basic_price}</p>
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

                <div>

                    <div className="flex justify-between gap-2 mt-5 mr-5">

                        
                             <button  className="btn bg-lime-600 border-0"> Purchase Now </button>
                        


                        <Link to={`/premium/${id}`}><button className="btn bg-lime-600 border-0">Buy Premium</button></Link>
                    </div>


                    <div className='mt-3'>
                    <Pdf targetRef={ref} options={options} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf} className="btn bg-lime-600 border-0"> Download PDF </button>}
                        </Pdf>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;