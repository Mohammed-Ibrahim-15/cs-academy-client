import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    // console.log(course)
    const { course_id, course_title, course_photo, course_duration, instructor_name } = course

    return (
        <Card className='mb-4'>
            <div>
                <div className='d-md-flex'>
                    <Card.Img style={{ width: '250px', height: '250px' }} variant="top" src={course_photo} />
                    <div className='d-flex flex-column justify-content-center align-items-between mx-2'>
                        <Card.Title> <h3>Course Name: {course_title}</h3> </Card.Title>
                        <div>
                            <Card.Title>Duration: {course_duration}</Card.Title>
                            <Card.Title>Instructor: {instructor_name}</Card.Title>
                            <Link to={`/course/${course_id}`}><Button variant="primary">Course Details</Button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    );
};

export default Courses;