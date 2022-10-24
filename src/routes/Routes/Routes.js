import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <></>
            }
        ]

    }
])