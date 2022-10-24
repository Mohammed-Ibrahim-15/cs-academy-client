import { createBrowserRouter } from "react-router-dom";
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
                element: <Home></Home>
            },
        ]

    }
])