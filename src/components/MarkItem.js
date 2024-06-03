import React, { useEffect } from "react";
import { useState} from "react";
import { StyleSheet } from "react-native";
import { Box,HStack,Image,Pressable,Text, VStack} from "@gluestack-ui/themed";
import { useNavigation,useTheme } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { useDispatch, useSelector } from "react-redux";
import {changeMark,selectActivity} from "../redux/avtivitySlice"

export default MarkItem =({event})=>{
    const [hasMark,setHasMark]=useState(event.mark);

    const activity = useSelector((state) => selectActivity(state, event.id));
    useEffect(() => {
        setHasMark(activity?.mark);
    }, [activity?.mark]);

    const {navigate} = useNavigation();
    const { colors } = useTheme();

    const dispatch=useDispatch();

    let markIcon= hasMark?"bookmark":"bookmark-outline";
    let markIconColor= hasMark?colors.focus:colors.primary500;
    const setmark = ()=>setHasMark(!hasMark);

    return(
        <Box w={350} rounded="$xl" overflow="hidden" mb={20} alignSelf="center">
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigate("saveDetail",event)}>
                <Image source={{uri:`${event.img}`}} alt="bird" w="$full" h={132}/>
            </TouchableOpacity>
            <Box bg={colors.card} pt={12} pb={12} px={8} >
                <HStack justifyContent="space-between">
                    <VStack>
                        <Text fontSize={20} bold="true" color={colors.primary800}>{event.title}</Text>
                        <Text fontSize={16} bold="true" mt={8} color={colors.primary500}>{event.location}</Text>
                    </VStack>
                    <Box justifyContent="flex-end">
                    <MaterialCommunityIcons style={styles.btn} name="bookmark" size={28} color={colors.focus} onPress={()=>{setmark();dispatch(changeMark(event.id))}} />
                    </Box>
                </HStack>

            </Box>
            </Box>
    );
}

const styles=StyleSheet.create({
    btn:{
        justifyContent:"flex-end"
    }
})