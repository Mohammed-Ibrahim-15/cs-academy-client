import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Checkout = () => {

    const { user } = useContext(AuthContext)
    const course = useLoaderData()
    const { course_title, course_price, course_duration, total_video } = course
    return (
        < div >
            <Card className="text-center">
                <Card.Header> <h2>Checkout Page</h2> </Card.Header>
                <Card.Body>
                    <h2 className='text-success'>Customer Details</h2>
                    <h5>Name: {user?.displayName}</h5>
                    <Card.Title>Email: {user?.email}</Card.Title>
                    <br />
                    <Card.Text>
                        <h2 className='text-success'>Course You Want Premium Access</h2>
                        <h4>Course Name: {course_title} </h4>
                        <h6>Duration: {course_duration} Months </h6>
                        <h6>Video: {total_video} Videos </h6>
                        <h5 className='text-danger'>Price: {course_price}$ </h5>
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Checkout;