import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, Box, Image, Pressable, Text, Center, ScrollView } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ChatList from "../components/ChatList";
import ChatHeader from "../components/ChatHeader"
import Game from "../components/Game"


export default GameScreen = ({navigation}) => {
    const {colors} =useTheme();
    return(
            <Box bg={colors.surface} flex={1}>
                <Center>
                    <Game />
                </Center>
            </Box>
    )
}
