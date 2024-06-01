import React from "react";
import { StyleSheet } from "react-native";
import { Box, Image, Text } from "@gluestack-ui/themed";

export default ChatDetail = ({route}) => {
    const {title, message}=route.params;
    return(
        <Box bg="#fff" w="$80">
            <Text size="xl">{title}</Text>
            <Text>{message}</Text>
            <Image
                style={styles.icon} 
                source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/account_circle_FILL0_wght400_GRAD0_opsz24.png"}}
            />
        </Box>
    )
}