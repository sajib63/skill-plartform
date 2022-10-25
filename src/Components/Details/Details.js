import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const allData = useLoaderData();
    console.log(allData);
    const { id, course_thumb, basic_price, advance_price, instructor_img, instructor_name, lectures, rating, subject, title, watch_time } = allData;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:w-6/12 mx-auto my-10">

            <figure className='lg:w-6/12'><img  src={course_thumb}  alt="Album" /></figure>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Details;