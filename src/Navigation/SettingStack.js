import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Pressable } from "@gluestack-ui/themed";

import SettingScreen from "../screens/SettingScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default SettingStack=()=>{
    const {colors}=useTheme();
    const {navigate}=useNavigation();
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
            <Stack.Screen name="Game" component={GameScreen} 
            options={{
                title: "小遊戲",
                headerLeft:()=>(
                    <Pressable pl={12}>
                        <AntDesign name="left" size={24} color={colors.primary800} onPress={()=>navigate("Setting")} /> 
                    </Pressable>)

            }}
            />
        </Stack.Navigator>
    )
}