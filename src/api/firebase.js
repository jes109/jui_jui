import { getApps,getApp,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';

const firebaseConfig = {
    apiKey: "AIzaSyDL50MXmqMw2G2ugoJusfPXL4pX3iarVQs",
    authDomain: "juijui.firebaseapp.com",
    projectId: "juijui",
    storageBucket: "juijui.appspot.com",
    messagingSenderId: "429219818605",
    appId: "1:429219818605:web:eca592735153a00da6a364"
  };

  const app_length=getApps().length>0;
  const app=app_length?getApp():initializeApp(firebaseConfig);
  const auth=app.length?getAuth(app):
  initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
  })

