import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { View } from "@gluestack-ui/themed";
import { GluestackUIProvider, Center, HStack, Button, ButtonText, Switch, Text, FlatList, Box, Input, InputIcon, InputField, SearchIcon, InputSlot} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import GameScreen from "../screens/GameScreen";

export default Game = () =>{
    const colorScheme = useColorScheme();

    return(
        <SafeAreaProvider>
            <GluestackUIProvider config={config} colorMode={colorScheme}>
                <GameScreen />
            </GluestackUIProvider>
        </SafeAreaProvider>
    )
}

const styles=StyleSheet.create(
    {
        frame: {
            marginTop: 20
        }
    }
);

