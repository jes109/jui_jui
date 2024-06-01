import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box, Image, View, Text, Pressable } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default ChatItem =({chat})=>{
    const {navigate} = useNavigation();
    const {colors}=useTheme();
    return(
    <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.card}>
            <MaterialCommunityIcons name="account-circle" size={56}/>
            <View style={styles.text}>
                <Text style={styles.title}  color={colors.primary800}>{chat.title}</Text>
                <Text style={styles.message} color={colors.primary500}>{chat.message}</Text>
            </View>
        </View>
    </TouchableOpacity>
    );
}

const styles=StyleSheet.create(
    {
        icon: {
            height: 50,
            width: 50,
            marginLeft: 15
        },
        title: {
            fontSize: 18
        },
        message: {
            fontSize: 16,
            color: "gray"
        },
        card: {
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15
        },
        text: {
            marginLeft: 20,
            gap:8
        }
    }
);