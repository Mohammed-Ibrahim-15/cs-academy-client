import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import SideNav from '../SideNav/SideNav';

const AllCoursesDetails = () => {
    const courses = useLoaderData()
    return (
        <div className='container w-auto'>
            <h1 className='text-center text-secondary my-3 fst-italic fs-1'>All Courses</h1>
            <Container>
                <Row className='d-flex flex-column-reverse flex-md-row'>
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

export default AllCoursesDetails;