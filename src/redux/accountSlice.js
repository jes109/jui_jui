import {createSlice } from "@reduxjs/toolkit"

const initialState={
    general:{
        name:"",
        email:"",
        password:"",
    },
    login:{hasLogin:false},
    sign:{hasAccount:false}
}

const accountSlice=createSlice({
    name:"account",
    initialState,
    reducers:{
        setGeneralAccount:(state,action)=>{
            state.general={...state.general,...action.payload}
        },
        login:(state,action)=>{
            state.login.hasLogin=true;
            state.general = { ...state.general, ...action.payload};
        },
        logout:(state)=>{
            state.login.hasLogin=false;
            state.general = {
                name: "",
                email: "",
                password:""
             }
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