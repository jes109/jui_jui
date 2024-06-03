import React from "react";
import { useState } from "react";
import { Pressable,Text} from "@gluestack-ui/themed";
import {createStackNavigator} from "@react-navigation/stack"
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useDispatch,useSelector } from "react-redux";
import {selectMessage ,readMessage} from "../redux/messageSlice"

import HomeScreen from "../screens/HomeScreen"
import EventDetailScreen from "../screens/EventDetailScreen";
import AddEventScreen from "../screens/AddEventScreen";
import UnAddActionSheet from "../components/UnAddActionSheet";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default Home = () => {
    const {colors}=useTheme();
    const {goBack} =useNavigation();

    const hasRead=useSelector(selectMessage);
    const dispatch=useDispatch();
    const [notify,setNotify]=useState(hasRead);
    let notifyIcon=notify?"bell-badge":"bell";

    const [hasMark,setHasMark]=useState(false);
    let markIcon= hasMark?"bookmark":"bookmark-outline";
    let markIconColor= hasMark?colors.focus:colors.primary500;
    const setmark = ()=>setHasMark(!hasMark);

    const [fontsLoaded]=useFonts({"jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")}); 
    if(!fontsLoaded){return <Text>Font is Loading...</Text>;}    
    
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{ backgroundColor:colors.header},
            headerTitleStyle:{
                color:colors.primary800,
                fontSize:20,
                fontFamily:"jf"
            }
        }}>
            <Stack.Screen name="findEvent" component={HomeScreen} 
            options={{
                title:"探索",
                /*headerRight:()=>(
                    <Pressable pr={12}>
                        <MaterialCommunityIcons name={notifyIcon} size={24} color={colors.primary800} 
                        onPress={notify?dispatch(readMessage):null} /> 
                    </Pressable>
                )*/
            }}
            />
            <Stack.Screen name="detail" component={EventDetailScreen} 
             options={{
                title:"",
                headerStyle:{backgroundColor:colors.darksurface},
                headerLeft:()=>(
                    <Pressable pl={12}>
                        <AntDesign name="left" size={24} color={colors.primary800} onPress={()=>goBack()} /> 
                    </Pressable>
                ),
                headerRight:()=>(
                    <Pressable pr={12}>
                        <MaterialCommunityIcons name={markIcon} size={28} color={markIconColor} onPress={setmark} />
                    </Pressable>
                )
            }}
            />
            <Stack.Screen name="add" component={AddEventScreen}
            options={{
                headerShown:false,
                title:"發起活動",
                headerStyle:{
                    backgroundColor:colors.surface
                },
                headerLeft:()=>(
                    <UnAddActionSheet/>
                )
            }}/>
        </Stack.Navigator>
    )
}