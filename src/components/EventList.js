import React from "react";
import { FlatList, InputIcon } from "@gluestack-ui/themed";
import { Box,Image,Pressable,Text,Center, Input, InputField,SearchIcon } from "@gluestack-ui/themed";
import {useTheme } from '@react-navigation/native';

import EventItem from "./EventItem";

import Events from "../json/Events.json"
import { InputSlot } from "@gluestack-ui/themed";

export default EventList = () =>{
    const { colors } = useTheme();

    const renderItem=({item})=><EventItem event={item}/>;

    

    return(
        <FlatList
        ListHeaderComponent={(
            <Box bg={colors.surface}>
                <Input variant="rounded" size="lg" mb={16} w={360} mt={16} bg={colors.lightsurface}>
                    <InputSlot pl={16}>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField placeholder="search"/>
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