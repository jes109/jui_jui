import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Box,Badge,BadgeText,Image,Text,HStack,VStack, ScrollView, Fab,FabIcon,FabLabel, AddIcon, Pressable, Icon, Center} from "@gluestack-ui/themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

export default EventDetailScreen = ({route}) => {
    const { colors } = useTheme();
    const {title,location,img,date,limit,number,trait,description,join}=route.params;
    const [num,setNum]=useState(number);
    const [hasJoin,setHasJoin]=useState(join);

    const [fontsLoaded]=useFonts({"jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")}); 
    if(!fontsLoaded){return <Text>Font is Loading...</Text>;}

    const opacity=!hasJoin?1:0.5;

    return(
        <Box flex={1}>
            <ScrollView bg={colors.card}>
                <Box py={20} px={16} >
                    <Text size="2xl" bold="true" color={colors.primary800} mb={8}>{title}</Text>
                    <Image source={img} alt="pic" w="auto" h={200} mb={20} rounded="$2xl"/>
                    <VStack justifyContent="space-between" borderBottomWidth={1} borderBottomColor={colors.primary200} pb={16}>
                        <VStack gap={8}>
                            <Text fontFamily="" size="md" bold="true" color={colors.primary500}>日期:{date}</Text>
                            <Text size="md" bold="true" color={colors.primary500}>地點:{location}</Text>
                            <Text size="md" bold="true" color={colors.primary500}>人數:{limit}</Text>
                            <Text size="md" bold="true" color={colors.primary500}>建議條件:{trait}</Text>
                        </VStack>
                        <Text mt={12} alignSelf="flex-end" px={12} py={4} size="md" rounded="$2xl" bold="true" color={colors.primary500}  borderColor={colors.primary500} borderWidth={1} >目前參與人數:{num}</Text>
                    </VStack>
                    <Text fontFamily="jf" lineHeight="$md" color="black" mt={20} size="md" >{`${description}`}</Text>
                    <TouchableOpacity onPress={()=>{setNum(num+1);setHasJoin(true)}} activeOpacity={0.6} disabled={hasJoin}>
                    <HStack rounded="$full" py={12} style={styles.fab} bg={colors.primaryContainer} flex={1} justifyContent="center" opacity={opacity}>
                    <Icon as={AddIcon} color={colors.primary800}/>
                    <Text color={colors.primary800} bold="true">參加</Text>
                </HStack>
                </TouchableOpacity>
                </Box>
            </ScrollView>
        </Box>
           
    )
}
const styles=StyleSheet.create({
    fab:{
        alignSelf:"flex-end",
        width:80,
        shadowColor: "#000",
        shadowOffset: {
	        width: 2,
	        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    }
})

/*
<Fab bg={colors.primaryContainer} >
                    <FabIcon color={colors.primary800} as={AddIcon} />
                    <FabLabel color={colors.primary800} fontWeight="$bold" >參加</FabLabel>
                </Fab>
*/ 