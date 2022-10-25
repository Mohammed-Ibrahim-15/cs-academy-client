import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import SideNav from '../SideNav/SideNav';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h2>Welcome to Our Academy</h2>
            <Container>
                <Row>
                    <Col lg='9'>
                        {
                            courses.map((course) => <Courses
                                key={course.course_id}
                                course={course}
                            ></Courses>)
                        }
                    </Col>
                    <Col lg='3'>
                        <SideNav courses={courses}></SideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;