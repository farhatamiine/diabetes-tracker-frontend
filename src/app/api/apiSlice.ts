import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers, {getState}: any) => {
        const token = getState().auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers;
    }

})


export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes:["User",],
    endpoints: build => ({})
})