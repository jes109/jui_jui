import React from "react";
import { StyleSheet } from "react-native";
import { Box, Image, ScrollView, Text ,Center} from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";

import Map from "../components/Map"

const ChatMapScreen = ({navigation}) => {
    const {colors}=useTheme();

    return(
        <ScrollView bg={colors.card} flex={1}>
            <Center>
                <Map />
            </Center>
        </ScrollView>
    )
}

export default ChatMapScreen;