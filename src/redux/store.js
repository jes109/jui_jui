import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import messageSlice from "./messageSlice"
import colorModeSlice from "./colorModeSlice"
 
const store=configureStore({
    reducer:{
        account:accountSlice,
        message:messageSlice,
        colorMode:colorModeSlice
    }
});

export default store;