import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import accountSlice from "./accountSlice";
import messageSlice from "./messageSlice"
import colorModeSlice from "./colorModeSlice"
import activitiesReducer from './avtivitySlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }; 

const store=configureStore({
    reducer:{
        account:persistReducer(persistConfig,accountSlice),
        message:persistReducer(persistConfig,messageSlice),
        colorMode:persistReducer(persistConfig,colorModeSlice),
        activities:persistReducer(persistConfig,activitiesReducer)
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

persistStore(store);

export default store;