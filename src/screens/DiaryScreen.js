import React from "react";
import { useTheme } from "@react-navigation/native";
import {  Box, Image, Text, Center, ScrollView, HStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";


export default DiaryScreen = () => {
    const [fontsLoaded]=useFonts({"jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")}); 
    if(!fontsLoaded){return <Text>Font is Loading...</Text>;}

    const {colors} =useTheme();
    return(
            <ScrollView bg={colors.surface} flex={1}>
                <Box w={350} rounded="$xl" mb={28} bg={colors.card} alignSelf="center" mt={20} overflow="hidden">
                    <Box p={12}>
                    <Text fontFamily="jf" fontSize="$2xl" color={colors.primary800}>廚藝分享野餐</Text>
                    <HStack gap={20} py={8} borderBottomColor={colors.primary500} borderBottomWidth={1}>
                        <Text fontFamily="jf" fontSize="$lg" color={colors.loginlight}>103/4/11</Text>
                        <Text fontFamily="jf" fontSize="$lg" color={colors.loginlight}>大安森林公園</Text>
                    </HStack>
                    <Text mt={12} fontFamily="jf" fontSize="$lg">{`大安森林公園的設施非常完善，公廁和垃圾桶分佈合理，讓我們的野餐活動進行得非常順利。園內的環境維護得很好，無論是草地還是樹林，都乾淨整潔。這讓我們能夠更加舒心地享受大自然的美好。\n\n在這裡，時間彷彿過得特別快。不知不覺，夕陽已經開始西下，金色的陽光映照在湖面上，景色美不勝收。大家紛紛拍照留念，記錄下這美好的一天。`}</Text>
                    </Box>
                    <Image source={require("../img/diary1.png")} alt="img" w="$full" h={240}/>
                </Box>
                <Box w={350} rounded="$xl" mb={28} bg={colors.card} alignSelf="center" mt={20} overflow="hidden">
                    <Box p={12}>
                    <Text fontFamily="jf" fontSize="$2xl" color={colors.primary800}>賞鳥同好關渡一日遊</Text>
                    <HStack gap={20} py={8} borderBottomColor={colors.primary500} borderBottomWidth={1}>
                        <Text fontFamily="jf" fontSize="$lg" color={colors.loginlight}>103/5/27</Text>
                        <Text fontFamily="jf" fontSize="$lg" color={colors.loginlight}>關渡自然公園</Text>
                    </HStack>
                    <Text mt={12} fontFamily="jf" fontSize="$lg">{`我們沿著公園的木棧道慢慢走著，眼前展開了一片廣闊的濕地景觀。春天的早晨，陽光明媚，空氣中彌漫著泥土和植物的清香。我們很快就看到了許多常見的水鳥，如黑面琵鷺和大白鷺。每當看到新鳥種，大家都會停下來，用望遠鏡仔細觀察並記錄。`}</Text>
                    </Box>
                    <Image source={require("../img/diary2.jpg")} alt="img" w="$full" h={240}/>
                </Box>
            </ScrollView>
    )
}
