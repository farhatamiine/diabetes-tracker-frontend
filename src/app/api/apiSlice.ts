import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from '@reduxjs/toolkit/query/react'
import secureLocalStorage from "react-secure-storage";


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers, {getState}: any) => {
        const credentials:any = secureLocalStorage.getItem("credentials");
        if (credentials) {
            headers.set("authorization", `Bearer ${credentials.token}`)
        }
        return headers;
    }

})


export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes:["User","Logbook"],
    endpoints: build => ({})
})