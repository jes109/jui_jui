import { ScrollView } from "@gluestack-ui/themed";
import { Box,Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default NotifyScreen=()=>{
    const { colors } =useTheme();
    return(
        <ScrollView flex={1} bg={colors.lightsurface}>
            <TouchableOpacity activeOpacity={0.5}>
            <Box bg={colors.white} p={12} borderBottomWidth={2} borderBottomColor={colors.header}>
                <Text size="2xl" mb={8} color={colors.primary800}>活動結束確認</Text>
                <Text size="md" color={colors.loginlight}>賞鳥同好關渡一日遊</Text>
            </Box>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Box bg={colors.white} p={12} borderBottomWidth={2} borderBottomColor={colors.header}>
                <Text size="2xl" mb={8} color={colors.primary800}>是否退出群組</Text>
                <Text size="md" color={colors.loginlight}>賞鳥同好關渡一日遊</Text>
            </Box>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Box bg={colors.white} p={12} borderBottomWidth={2} borderBottomColor={colors.header}>
                <Text size="2xl" mb={8} color={colors.primary800}>活動日記編輯</Text>
                <Text size="md" color={colors.loginlight}>賞鳥同好關渡一日遊</Text>
            </Box>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Box bg={colors.white} p={12} borderBottomWidth={2} borderBottomColor={colors.header}>
                <Text size="2xl" mb={8} color={colors.primary800}>有活動邀請您加入</Text>
                <Text size="md" color={colors.loginlight}>賞鳥同好關渡一日遊</Text>
            </Box>
            </TouchableOpacity>
        </ScrollView>

    )
}