import { createBrowserRouter } from "react-router-dom";
import AllCoursesDetails from "../../component/AllCoursesDetails/AllCoursesDetails";
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
                element: <AllCoursesDetails></AllCoursesDetails>,
                loader: () => {
                    return fetch('https://cs-academy-server.vercel.app/all-courses')
                },
            }
        ]

    }
])