import {createSlice } from "@reduxjs/toolkit"

const initialState={
    general:{
        name:"",
        email:"",
    },
    login:{
        hasLogin:false
    }
}

const accountSlice=createSlice({
    name:"account",
    initialState,
    reducers:{
        setGeneralAccount:(state,action)=>{
            state.general=action.payload
        },
        login:(state)=>{
            state.login.hasLogin=true;
        },
        logout:(state)=>{
            state.login.hasLogin=false;
        }
    }
})

export const selectGeneral =(state)=>state.account.general;
export const selectLogin = (state)=>state.account.login.hasLogin;
export const {setGeneralAccount,login,logout}=accountSlice.actions;
export default accountSlice.reducer;