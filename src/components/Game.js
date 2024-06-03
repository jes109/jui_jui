import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "@gluestack-ui/themed";
import { GluestackUIProvider, Center, HStack, Button, ButtonText, Switch, Text, FlatList, Box, Input, InputIcon, InputField, SearchIcon, InputSlot} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default Game = () =>{

    return(
        <View style={styles.frame}>
            <Text style={styles.relax}>休息一下，來玩小遊戲吧!</Text>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        frame: {
            marginTop: 20
        }
    }
);
