import React from "react";
import { StyleSheet } from "react-native";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const ChatMapScreen = ({navigation}) => {
    
    return(
        <ScrollView bg={colors.card} flex={1}>
            <Center>
                <ChatMap/>
            </Center>
        </ScrollView>
    )
}

export default ChatMapScreen;