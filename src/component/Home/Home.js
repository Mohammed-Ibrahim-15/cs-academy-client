import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-secondary my-3 fst-italic fs-1'>Welcome to Our Academy</h1>
            <Container>
                <Row className='d-flex flex-column-reverse flex-md-row'>
                    <Col lg='12'>
                        {
                            courses.map((course) => <Courses
                                key={course.course_id}
                                course={course}
                            ></Courses>)
                        }
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Home;