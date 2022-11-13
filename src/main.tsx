import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import Login from "./Screens/Login";
import ErrorPage from "./Screens/error-page";
import Register from "./Screens/Register";
import MainLayouts from "./Layouts/MainLayouts";
import Dashboard from "./Screens/Dashboard";
import Logbook from "./Screens/Logbook";
import Food from "./Screens/Food";
import Timeline from "./Screens/Timeline";
import Charts from "./Screens/Charts";
import Reports from "./Screens/Reports";
import Data from "./Screens/Data";
import Clinician from "./Screens/Clinician";
import {Provider} from "react-redux"
import {store} from "./redux/store";

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
            },
            {
                path: "/logbook",
                element: <Logbook/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/food",
                element: <Food/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/timeline",
                element: <Timeline/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/charts",
                element: <Charts/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/reports",
                element: <Reports/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/data",
                element: <Data/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/clinician",
                element: <Clinician/>,
                errorElement: <ErrorPage/>
            },
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
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
)
