import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            <h2>Our Home Page</h2>
            {
                courses.map(course => <p>{course.course_title}</p>)
            }
        </div>
    );
};

export default Home;