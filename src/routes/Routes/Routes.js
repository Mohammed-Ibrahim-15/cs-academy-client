import { createBrowserRouter } from "react-router-dom";
import Course from "../../component/Course/Course";
import Home from "../../component/Home/Home";
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

            }
        ]

    }
])