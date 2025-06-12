import { createSlice } from '@reduxjs/toolkit'

const popupSlice = createSlice({
    name : "popup",
    initialState : {
        register: false
    },
    reducers : {
        setPopup : (state, action)=>{
            const {page, bool} = action.payload
            state[page] = bool
        }

    }
})

export const { setPopup } = popupSlice.actions;
export default popupSlice.reducer;