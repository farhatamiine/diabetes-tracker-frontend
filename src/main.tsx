import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'flowbite';

import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useNavigate,} from "react-router-dom";

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
import {store} from "./app/store";

const authRoute = [
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
];
const childRoute = [
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


const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayouts />}>
                            {
                                childRoute.map(route => {
                                    return(
                                        <Route
                                            path={route.path}
                                            errorElement={route.errorElement}
                                            element={route.element}
                                        />
                                    )
                                })
                            }
                        </Route>
                        {
                            authRoute.map(route => {
                                return(
                                    <Route
                                        path={route.path}
                                        errorElement={route.errorElement}
                                        element={route.element}
                                    />
                                )
                            })
                        }
                    </Routes>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
