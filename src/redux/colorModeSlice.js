import {createSlice } from "@reduxjs/toolkit"

const initialState={colorMode:"light"};

const colorModeSlice=createSlice({
    name:"colorMode",
    initialState,
    reducers:{
        ToggleColorMode:(state)=>{
            state.colorMode=state.colorMode=="light"?"dark":"light";
        }
    }
})

export const selectColorMode = (state)=>state.colorMode;
export const {ToggleColorMode}=colorModeSlice.actions;
export default colorModeSlice.reducer;