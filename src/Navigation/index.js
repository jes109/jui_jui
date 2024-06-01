import React from "react";
import { NavigationContainer } from "@react-navigation/native"

import BottomTab from "../Navigation/BottomTab"
import LoginScreen from "../screens/LoginScreen"

import MyTheme from "../Theme/light"
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { selectLogin } from "../redux/accountSlice";

const Navigation = () => {
    const haslogin =useSelector(selectLogin);

    return(
        <KeyboardAvoidingView
        flex={1}
        keyboardVerticalOffset={Platform.select({ios:0,android:-500})}
        behavior={Platform.OS==="ios"?"padding":"height"}
        >
            {
                !haslogin?
                (<LoginScreen theme={MyTheme}/>)
                :
                (<NavigationContainer theme={MyTheme}>
                <BottomTab />
                </NavigationContainer>)
            }
        </KeyboardAvoidingView>
    );
}

export default Navigation; 