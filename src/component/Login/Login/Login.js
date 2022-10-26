import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Login = () => {
    const { loginUser, setLoading, googleSignIn, githubSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        // console.log(email, password)
        loginUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch((error) => {
                console.error('Error: ', error)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.error('Error: ', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleGithub = () => {
        githubSignIn(githubProvider)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.error('Error: ', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='container w-50 border border-primary border-2 rounded-4 p-5 mt-3'>
            <Form onSubmit={handleSubmit}>
                <h2>Please Login !!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <span className='ms-2'><small><Link to='/register'>Do not have account?</Link> </small></span>
                <p>or</p>
                <Button onClick={handleGoogle} variant="success" type="submit">
                    <FaGoogle></FaGoogle> Google Login
                </Button>
                <br />
                <Button onClick={handleGithub} className='mt-2' variant="dark" type="submit">
                    <FaGithub></FaGithub> Github Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;