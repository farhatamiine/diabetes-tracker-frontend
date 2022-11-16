import {apiSlice} from "../../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'auth/signIn',
                method: 'POST',
                body: {...credentials}
            }),
            invalidatesTags: ["User"]
        }),

    })
})

export const {
    useLoginMutation
}: any = authApiSlice