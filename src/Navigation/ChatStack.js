import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { View, Pressable, Image } from "@gluestack-ui/themed";
import {useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import ChatScreen from "../screens/ChatScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";

const Stack = createStackNavigator();

export default ChatStack = ({navigation}) => {
    //const {navigation} = useNavigation();
    const {colors}=useTheme();

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
            <Stack.Screen name="Chat" component={ChatScreen} 
            options={{
                title: "聊天室",
                headerRight: () => (
                    <View style={styles.headerStyle}>
                        <View style={styles.icons}>
                            <Pressable style={{marginRight: 8}}>
                            <MaterialIcons name="group" size={28} color={colors.primary800}/>
                            </Pressable>
                            <Pressable>
                            <MaterialCommunityIcons name="square-edit-outline" size={28} color={colors.primary800}/>
                            </Pressable>
                        </View>
                    </View>
                )
            }}
            />
        </Stack.Navigator>
    )
}

const styles=StyleSheet.create(
    {
        headerStyle: {
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 12,
            //paddingVertical: 20,
            flexDirection: "row"
        },
        iconl: {
            width: 30,
            height: 30,
            marginRight: 5
        },
        iconr: {
            width: 30,
            height: 30
        },
        icons: {
            flexDirection: "row"
        },
        icon: {
            width: 30,
            height: 30
        }
    }
);