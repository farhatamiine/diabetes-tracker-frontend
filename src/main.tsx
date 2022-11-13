import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import Login from "./Screens/Login";
import ErrorPage from "./Screens/error-page";
import Register from "./Screens/Register";
import MainLayouts from "./Layouts/MainLayouts";
import Dashboard from "./Screens/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>,
                errorElement: <ErrorPage/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/register",
        element: <Register/>,
        errorElement: <ErrorPage/>
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
