import React from 'react';
import { Link } from 'react-router-dom';

const CoursesCard = ({ data }) => {
    const {id, course_thumb, basic_price, advance_price, instructor_img, instructor_name, lectures, rating, subject, title, watch_time } = data;

    return (
        <div className="card card-compact bg-base-100 shadow-xl mt-5 mx-4">
            <figure><img src={course_thumb} alt="Shoes" /></figure>

            <div className="card-body">
                <div className='flex justify-between text-center items-center'>
                    <div className='flex text-center items-center justify-center'>
                        <img  src={instructor_img} className="w-10 h-10 rounded-full" alt="" />
                        <p className='ml-3'>{instructor_name}</p>
                    </div>

                    <div>
                        <p className='text-lime-700 '>{subject}</p>
                        </div>
                </div>
                <p className='text-2xl'>{title}</p>
                <div className="card-actions justify-center">
                   <Link to={`/details/${id}`}>
                   <button className="btn bg-lime-700 border-0 ">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;