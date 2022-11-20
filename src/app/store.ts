import {configureStore} from "@reduxjs/toolkit"
import {apiSlice} from "./api/apiSlice"
import authReducer from '../redux/features/auth/authSlice'
import userReducer from '../redux/features/user/userSlice'
import logbookReducer from '../redux/features/Logbook/LogbookSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        user: userReducer,
        logBook:logbookReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})