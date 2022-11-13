import {Formik} from 'formik';
import * as yup from 'yup';

import React from 'react'
import {useNavigate} from "react-router-dom";


const validationSchema = yup.object({
    username: yup
        .string()
        .required('username is required'),
    password: yup
        .string()
        .required("Password is required"),
});

type RequestType = {
    username: String,
    password: String
}

function Login() {

    let navigate = useNavigate();


    async function authenticate(values: RequestType) {
        const res = await fetch(`http://localhost:8080/api/auth/signIn`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.ok) {
            const json = await res.json()
            localStorage.setItem("authenticated", JSON.stringify(json))
            await navigate("/dashboard")
        }

    }

    return (
        <>
            <div className="min-h-full flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div className={"relative"}>
                            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Welcome back,</h2>
                        </div>

                        <div className="mt-8">
                            <p className="text-md font-light text-gray-700  mb-4">
                                Hey! Enter your details to get sign in to your account.
                            </p>
                            <div className="mt-6">
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                    }}
                                    onSubmit={
                                        (values,) => authenticate(values)
                                    }
                                    validationSchema={validationSchema}>
                                    {({
                                          values,
                                          errors,
                                          touched,
                                          handleChange,
                                          handleBlur,
                                          isValid,
                                          dirty,
                                          handleSubmit,
                                      }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Username
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.username}
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                                    />
                                                </div>
                                                <span className={"text-red-400 font-medium text-sm"}>
                                                {errors.username && touched.username && errors.username}
                                                </span>
                                            </div>

                                            <div className={"my-4"}>
                                                <label htmlFor="password"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                        autoComplete="current-password"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                                    />
                                                </div>
                                                <span className={"text-red-400 font-medium text-sm"}>
                                                     {errors.password && touched.password && errors.password}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-end my-4">
                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-cyan-600 hover:text-cyan-500">
                                                        Forgot your password?
                                                    </a>
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    disabled={!(isValid && dirty)}
                                                    type="submit"
                                                    className="disabled:bg-gray-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                                >
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default Login
