import React, { useState } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { Pressable } from "@gluestack-ui/themed";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch,useSelector } from "react-redux";
import {selectMessage ,readMessage} from "../redux/messageSlice"

import SaveScreen from "../screens/SaveScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import JoinScreen from "../screens/JoinScreen";


const Stack = createStackNavigator();

export default SaveStack=()=>{
    const {colors}=useTheme();
    const {navigate}=useNavigation();

    const [hasMark,setHasMark]=useState(false);
    let markIcon= hasMark?"bookmark":"bookmark-outline";
    let markIconColor= hasMark?colors.focus:colors.primary500;
    const setmark = ()=>setHasMark(!hasMark);

    const hasRead=useSelector(selectMessage);
    const dispatch=useDispatch();
    const [notify,setNotify]=useState(hasRead);
    let notifyIcon=notify?"bell-badge":"bell";

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:true,
            headerStyle:{ backgroundColor:colors.header},
            headerTitleStyle:{
                color:colors.primary800,
                fontSize:20
            }
        }}>
            <Stack.Screen name="Save" component={SaveScreen} 
            options={{
                title:"我的活動",
                headerRight:()=>(
                    <Pressable pr={12}>
                        <MaterialCommunityIcons name={notifyIcon} size={24} color={colors.primary800} 
                        onPress={notify?dispatch(readMessage):null} /> 
                    </Pressable>
                )
            }}
            />
            <Stack.Screen name="saveDetail" component={EventDetailScreen} 
             options={{
                title:"",
                headerLeft:()=>(
                    <Pressable pl={12}>
                        <AntDesign name="left" size={24} color={colors.primary800} onPress={()=>navigate("Save")} /> 
                    </Pressable>),
                headerRight:()=>(
                    <Pressable pr={12}>
                        <MaterialCommunityIcons name={markIcon} size={28} color={markIconColor} onPress={setmark} />
                    </Pressable>
                    )
            }}
            />
            <Stack.Screen name="JoinDetail" component={JoinScreen} 
             options={{
                title:"",
                headerLeft:()=>(
                    <Pressable pl={12}>
                        <AntDesign name="left" size={24} color={colors.primary800} onPress={()=>navigate("Save")} /> 
                    </Pressable>),
            }}
            />
        </Stack.Navigator>
    )
}