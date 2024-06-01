import { createSlice } from "@reduxjs/toolkit";

const initialState={
    hasRead:false
}

const messageSlice=createSlice({
    name:"message",
    initialState,
    reducers:{
        readMessage:(state)=>{
            state.hasRead=true
        }
    }
});

export const selectMessage = (state)=>state.hasRead; 
export const {readMessage} = messageSlice.actions; 
export default messageSlice.reducer;