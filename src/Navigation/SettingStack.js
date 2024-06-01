import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default SettingStack=()=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{ backgroundColor: "#F6F7E3"},
            headerTitleStyle:{
                color: "#194200",
                fontSize: 20
            }
        }}
        >
            <Stack.Screen name="Setting" component={SettingScreen} 
            options={{
                title: "設定"
            }}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}