import React, { useEffect, useState } from "react";
import { Box,Center} from "@gluestack-ui/themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import EventList from "../components/EventList"
import { getActs } from "../api/firebase";

export default Home = () => {
    const {colors} =useTheme();
    const {navigate}=useNavigation();

    return(
        <Box flex={1} bg={colors.surface}>
            <Center flex={1}>
                <EventList/>
            </Center>
            <Box style={styles.fabBack} bg={colors.surface}>
                <TouchableOpacity onPress={()=>navigate("add")}>
                    <Box bg={colors.primaryContainer} p={16} rounded="$full" >
                        <MaterialCommunityIcons name="square-edit-outline" size={28} color={colors.primary800}/>
                    </Box>
                </TouchableOpacity>
                </Box>
        </Box>
    )
}

const styles=StyleSheet.create({
    fabBack:{
        position:"absolute",
        right:8,
        bottom:16,
        zIndex:999,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
	        width: 2,
	        height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 10,
    }
})
