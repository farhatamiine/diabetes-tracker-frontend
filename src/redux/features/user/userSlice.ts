import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {profile: null},
    reducers: {
        setProfile: (state, action) => {
            console.log(action.payload)
            state.profile = action.payload
        },
    },
})

export const {setProfile} = userSlice.actions

export default userSlice.reducer

export const selectUserProfile = (state: any) => state.user.profile