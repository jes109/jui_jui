import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { useDispatch, useSelector } from "react-redux";
import { changeMark, selectActivity } from "../redux/avtivitySlice"

export default EvenItem = ({ event }) => {
    const [hasMark, setHasMark] = useState(event.mark);
    const { colors } = useTheme();
    const dispatch = useDispatch();

    // 监听 mark 的变化，当 mark 发生变化时重新获取数据
    useEffect(() => {
        setHasMark(event.mark);
    }, [event.mark]);

    // 切换 mark 状态
    const setmark = () => {
        setHasMark(!hasMark);
        dispatch(changeMark(event.id));
    };

    return (
        <Box w={350} rounded="$xl" overflow="hidden" mb={20} alignSelf="center">
            <Image source={{ uri: `${event.img}` }} alt="bird" w="$full" h={132} />
            <Box bg={colors.card} pt={12} pb={12} px={8} >
                <HStack justifyContent="space-between">
                    <VStack>
                        <Text fontSize={20} bold="true" color={colors.primary800}>{event.title}</Text>
                        <Text fontSize={16} bold="true" mt={8} color={colors.primary500}>{event.location}</Text>
                    </VStack>
                    <Box justifyContent="flex-end">
                        {/* 使用 hasMark 控制图标和颜色 */}
                        <MaterialCommunityIcons style={styles.btn} name={hasMark ? "bookmark" : "bookmark-outline"} size={28} color={hasMark ? colors.focus : colors.primary500} onPress={setmark} />
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: "flex-end"
    }
})