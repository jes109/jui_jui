import React from "react";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Pressable } from "@gluestack-ui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useDispatch,useSelector } from "react-redux";
import {selectMessage ,readMessage} from "../redux/messageSlice"

import HomeStack from "./HomeStack"
import ChatStack from "./ChatStack";
import SettingStack from "./SettingStack";
import SaveStack from "./SaveStack";
import ChatScreen from "../screens/ChatScreen"
import ChatMapScreen from "../screens/ChatMapScreen";

const Tab = createBottomTabNavigator();

//Tab的title名稱如果有更適當的可再修改
export default () =>{ 
    const {colors}=useTheme();

    const hasRead=useSelector(selectMessage);
    const dispatch=useDispatch();
    const [notify,setNotify]=useState(hasRead);
    let notifyIcon=notify?"bell-badge":"bell";
    const checkNotify= ()=>setNotify(!notify);

    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:colors.primary800,
            tabBarStyle:{
                backgroundColor:colors.lightsurface
            },
            headerStyle:{
                backgroundColor:colors.header,
            },
            headerTitleStyle:{
                color:colors.primary800,
                fontSize:20
            }
        }}
        >
            <Tab.Screen name="home" component={HomeStack} 
            options={{
                title:"探索",
                tabBarIcon:({color})=>( <AntDesign name='find' color={color} size={26}/>)
            }}
            />
            <Tab.Screen name="save" component={SaveStack} 
            options={{
                title:"我的活動",
                headerRight:()=>(
                    <Pressable pr={12}>
                        <MaterialCommunityIcons name={notifyIcon} size={24} color={colors.primary800} 
                        onPress={notify?dispatch(readMessage):null} /> 
                    </Pressable>
                ),
                tabBarIcon:({color})=>( <AntDesign name='book' color={color} size={26}/>)
            }}
            />
            <Tab.Screen name="chat" component={ChatStack} 
            options={{
                title:"聊天室",
                tabBarIcon:({color})=>( <MaterialCommunityIcons name='chat-processing-outline' color={color} size={26}/>)
            }}
            />
            <Tab.Screen name="setting" component={SettingStack} 
             options={{
                title:"個人",
                tabBarIcon:({color})=>( <AntDesign name='user' color={color} size={26}/>)
            }}
            />
        </Tab.Navigator>
    );
}