import React from "react";
import { FlatList, InputIcon,InputSlot } from "@gluestack-ui/themed";
import { Box, Input, InputField,SearchIcon } from "@gluestack-ui/themed";
import {useTheme } from '@react-navigation/native';
import { useFonts } from "expo-font";

import EventItem from "./EventItem";
import Events from "../json/Events.json"

export default EventList = () =>{
    const { colors } = useTheme();

    const [fontsLoaded]=useFonts({"jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")}); 
    if(!fontsLoaded){return <Text>Font is Loading...</Text>;}
    
    const renderItem=({item})=><EventItem event={item}/>;
    return(
        <FlatList
        ListHeaderComponent={(
            <Box bg={colors.surface}>
                <Input variant="rounded" size="lg" mb={16} w={360} mt={16} bg={colors.lightsurface}>
                    <InputSlot pl={16}>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField fontFamily="jf" placeholder="search"/>
                </Input>
            </Box>
        )}
        stickyHeaderIndices={[0]}
        data={Events}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        showsVerticalScrollIndicator={false}
        />
    )
}