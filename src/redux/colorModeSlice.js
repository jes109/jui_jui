import {createSlice } from "@reduxjs/toolkit"

const initialState={colorMode:"white"};

const colorModeSlice=createSlice({
    name:"colorMode",
    initialState,
    reducers:{
        toggleColorMode:(state)=>{
            state.colorMode=state.colorMode=="light"?"light":"dark";
        }
    }
})

export const selectColorMode = (state)=>state.colorMode;
export const {toggleColorMode}=colorModeSlice.actions;
export default colorModeSlice.reducer;