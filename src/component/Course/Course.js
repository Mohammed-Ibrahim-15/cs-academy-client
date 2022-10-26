import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";

const Course = () => {
    const course = useLoaderData()
    const ref = createRef()
    console.log(course)
    const { course_id, course_title, course_details, course_photo, course_duration, instructor_name, course_price, total_video, total_quiz } = course
    return (
        <div className='container App my-4'>
            <div>
                <Pdf targetRef={ref} filename={`course_name_${course_title}`}>
                    {({ toPdf }) => <button onClick={toPdf} className='btn btn-dark mb-3' >Course PDF</button>}
                </Pdf>
                <div ref={ref} className='d-flex flex-column align-items-center'>
                    <Card.Img style={{ width: '300px', height: '300px' }} variant="top" src={course_photo} />
                    <div className='d-flex flex-column justify-content-center align-items-between me-4'>
                        <Card.Title> <h1>Course Name: {course_title}</h1> </Card.Title>
                        <div className='d-md-flex  justify-content-between align-items-center my-3'>
                            <div>
                                <Card.Title> <h4>Price: {course_price}$</h4> </Card.Title>
                                <Card.Title> <h4>Videos: {total_video}</h4> </Card.Title>
                                <Card.Title> <h4>Quiz: {total_quiz}</h4> </Card.Title>
                            </div>
                            <div>
                                <Card.Title> <h4>Duration: {course_duration} <small>Months</small> </h4> </Card.Title>
                                <Card.Title> <h4>Instructor: {instructor_name}</h4> </Card.Title>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Course Description: {course_details} </h6>
                    <Link to={`/checkout/${course_id}`}><Button variant="primary">Get Premium Access</Button></Link>
                </div>

            </div>
        </div >
    );
};

export default Course;