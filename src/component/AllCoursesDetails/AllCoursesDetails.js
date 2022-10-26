import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourse from '../AllCourse/AllCourse';

const AllCoursesDetails = () => {
    const courses = useLoaderData()
    return (
        <div className='container App w-auto'>
            <h1 className='text-center text-secondary my-3 fst-italic fs-1'>All Courses</h1>
            {
                courses.map((course) => <AllCourse
                    key={course.course_id}
                    course={course}
                ></AllCourse>)
            }
        </div>
    );
};

export default AllCoursesDetails;