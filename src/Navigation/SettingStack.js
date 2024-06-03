import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "@gluestack-ui/themed";

import SettingScreen from "../screens/SettingScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default SettingStack=()=>{
    const [fontsLoaded]=useFonts({"jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")}); 
    if(!fontsLoaded){return <Text>Font is Loading...</Text>;}    
    
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{ backgroundColor: "#F6F7E3"},
            headerTitleStyle:{
                color: "#194200",
                fontSize: 20,
                fontFamily:"jf"
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