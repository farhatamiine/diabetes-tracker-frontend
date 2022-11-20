import {apiSlice} from "../../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: () => ({
                url: 'auth/profile',
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
    })
})

export const {
    useGetProfileQuery
}: any = userApiSlice