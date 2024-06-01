import {createSlice } from "@reduxjs/toolkit"

const initialState={
    general:{
        name:"",
        email:"",
    },
    login:{
        hasLogin:false,
    },
    sign:{
        hasAccount:false
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
        },
        gotoSignin:(state)=>{
            state.sign.hasAccount=!state.sign.hasAccount;
        },
        gotoSignup:(state)=>{
            state.sign.hasAccount=false;
        }
    }
})

export const selectGeneral =(state)=>state.account.general;
export const selectLogin = (state)=>state.account.login.hasLogin;
export const selectSign = (state)=>state.account.sign.hasAccount;
export const {setGeneralAccount,login,logout,gotoSignin,gotoSignup}=accountSlice.actions;
export default accountSlice.reducer;