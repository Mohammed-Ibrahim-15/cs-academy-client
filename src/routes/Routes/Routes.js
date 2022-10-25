import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Blog/Blog";
import Course from "../../component/Course/Course";
import Home from "../../component/Home/Home";
import Login from "../../component/Login/Login/Login";
import Register from "../../component/Login/Register/Register";
import Main from "../../layout/Main/Main";
import ErrorRoutes from "../ErrorRoutes/ErrorRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorRoutes></ErrorRoutes>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('http://localhost:5000/all-courses')
                },
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    }
])