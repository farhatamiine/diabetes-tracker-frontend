import {createSlice} from "@reduxjs/toolkit";

const logbookSlice = createSlice({
    name: 'logbook',
    initialState: {category: []},
    reducers: {
        setLogBookCategory: (state, action) => {
            console.log(action.payload)
            state.category = action.payload
        },
    },
})

export const {setLogBookCategory} = logbookSlice.actions

export default logbookSlice.reducer

export const selectLogBookCategory = (state: any) => state.logbook.category