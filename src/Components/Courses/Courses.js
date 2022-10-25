import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesCard from '../CoursesCard/CoursesCard';

const Courses = () => {
    const [AllData, setAllData] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className='container mx-auto grid lg:grid-cols-3'>
            <div>
                {
                    AllData?.map(data => <Link key={data.id}> <p className='lg:mb-10 sm:items-center text-lime-600  mt-5 text-2xl'>{data.title}</p></Link>)
                }
            </div>

            <div className='col-span-2 grid lg:grid-cols-3 gap-10 mb-8 '>
               {
                AllData?.map(data=> <CoursesCard key={data.id} data={data}></CoursesCard>)
               }
            </div>
        </div>
    );
};

export default Courses;