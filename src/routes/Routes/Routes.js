import { createBrowserRouter } from "react-router-dom";
import AllCoursesDetails from "../../component/AllCoursesDetails/AllCoursesDetails";
import Blog from "../../component/Blog/Blog";
import Checkout from "../../component/Checkout/Checkout";
import Course from "../../component/Course/Course";
import Home from "../../component/Home/Home";
import Login from "../../component/Login/Login/Login";
import Register from "../../component/Login/Register/Register";
import Main from "../../layout/Main/Main";
import ErrorRoutes from "../ErrorRoutes/ErrorRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                    return fetch('https://cs-academy-server.vercel.app/all-courses')
                },
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => {
                    return fetch(`https://cs-academy-server.vercel.app/course/${params.id}`)
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
            },
            {
                path: '/courses',
                element: <PrivateRoute><AllCoursesDetails></AllCoursesDetails></PrivateRoute>,
                loader: () => {
                    return fetch('https://cs-academy-server.vercel.app/all-courses')
                },
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => {
                    return fetch(`https://cs-academy-server.vercel.app/course/${params.id}`)
                }

            }
        ]

    }
])