import React from "react";
import { useState } from "react";
import { HStack, VStack } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Switch, Button, Box, View, Pressable, Image, Text, Center, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetItem, ActionsheetItemText, GluestackUIProvider } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";
import {selectLogin,logout} from "../redux/accountSlice"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

//import { CommonActions } from "@react-navigation/native";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default SettingDetail = () =>{
    const navigation = useNavigation();
    const [showActionsheet, setShowActionsheet] = React.useState(false);

    const dispatch=useDispatch();
    const hasLogin =useSelector(selectLogin);

    const handleClose = () => setShowActionsheet(!showActionsheet);
    const HorizontalLine = () => {
        return (
            <View style={styles.line} />
        );
    };
    const close = () => {
        setShowActionsheet(false);
        dispatch(logout());
    };
    //const {goBack} =useNavigation();
    const {colors} = useTheme();
    const [colorMode, setColorMode] = useState("white");
    const toggleColorMode = () => {
        if(colorMode == "white") setColorMode("black");
        else setColorMode("white");
    };

    return(
            <View>
                <View style={styles.card}>
                    <MaterialCommunityIcons name="account-circle" size={60}/>
                    <View style={styles.info}>
                        <View style={styles.user}>
                            <Text style={styles.text}>User</Text>
                            <HStack ml={12}>
                                <MaterialCommunityIcons name="star-circle" size={24} color={colors.primary800}/>
                                <MaterialCommunityIcons name="star-circle" size={24} color={colors.primary800}/>
                                <MaterialCommunityIcons name="star-circle" size={24} color={colors.primary800}/>
                                <MaterialCommunityIcons name="star-circle-outline" size={24} color={colors.primary200}/>
                                <MaterialCommunityIcons name="star-circle-outline" size={24} color={colors.primary200}/>
                            </HStack>
                        </View>
                        <Text style={styles.hash} >#資深登山客 #自行車探險家 #攀岩新手</Text>
                    </View>
                </View>
                <View style={styles.follow}>
                    <View style={styles.block}>
                        <Text style={styles.num} color={colors.primary800} bold="true">5</Text>
                        <Text style={styles.num}>發佈活動</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.num} color={colors.primary800} bold="true">45</Text>
                        <Text style={styles.num}>參加過</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.num} color={colors.primary800} bold="true">3</Text>
                        <Text style={styles.num}>徽章</Text>
                    </View>
                </View>
                
                <View style={styles.btns}>
                    <View style={styles.btnup}>
                        <Box style={styles.btnleft} bg={colors.primary200}>
                            <Pressable>
                            <MaterialCommunityIcons name="bookmark-outline" size={40} color={colors.primary800}/>
                            </Pressable>
                            <Text style={styles.word}>我的收藏</Text>
                        </Box>
                        <Box style={styles.btnright} bg={colors.primary200}>
                            <Pressable>
                            <MaterialCommunityIcons name="heart-outline" size={40} color={colors.primary800}/>
                            </Pressable>
                            <Text style={styles.wordtwo}>喜歡</Text>
                        </Box>
                    </View>
                    <View style={styles.btndown}>
                        <Box style={styles.btnleft} bg={colors.primary200}>
                            <Pressable>
                            <MaterialCommunityIcons name="square-edit-outline" size={40} color={colors.primary800}/>
                            </Pressable>
                            <Text style={styles.wordpost}>我的貼文</Text>
                        </Box>
                        <Box style={styles.btnright} bg={colors.primary200}>
                            <Pressable>
                            <MaterialCommunityIcons name="help-circle-outline" size={40} color={colors.primary800}/>
                            </Pressable>
                            <Text style={styles.wordtwo}>幫助</Text>
                        </Box>
                    </View>
                </View>
                <Box>
                    <Center>
                        <View>
                            <TouchableOpacity onPress={handleClose}>
                                <Box style={styles.logout} bg={colors.primary800}>
                                    <Text style={styles.logoutword}>Log Out</Text>
                                </Box>
                            </TouchableOpacity>
                        </View>
                    </Center>
                    <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
                        <ActionsheetBackdrop />
                        <ActionsheetContent h="$72" zIndex={999}>
                            <Text style={styles.sure}>確定登出?</Text>
                            <HorizontalLine />
                            <Center>
                                <ActionsheetItem onPress={close}>
                                    <Center>
                                        <ActionsheetItemText style={styles.item}><Text style={styles.yes}>Yes</Text></ActionsheetItemText>
                                    </Center>
                                </ActionsheetItem>
                            </Center>
                            <HorizontalLine />
                            <Center>
                                <ActionsheetItem onPress={handleClose}>
                                    <Center>
                                        <ActionsheetItemText style={styles.item}><Text style={styles.cancel}>Cancel</Text></ActionsheetItemText>
                                    </Center>
                                </ActionsheetItem>
                            </Center>
                        </ActionsheetContent>
                    </Actionsheet>
                </Box>
            </View>

    )
}

const styles=StyleSheet.create(
    {
        item: {
            alignSelf: "center"
        },
        line: {
            width: "100%",
            height: 2,
            backgroundColor: "#D3D3D3",
            marginTop: 10,
            marginBottom: 10
        },
        sure: {
            fontSize: 20,
            color: "red",
            paddingVertical: 20
        },
        yes: {
            fontSize: 20,
            color: "black",
            paddingVertical: 20,
            textAlign: "center"
        },
        cancel: {
            fontSize: 20,
            color: "blue",
            paddingVertical: 20,
            alignSelf:"center"
        },
        logout: {
            marginTop: 60,
            justifyContent: "center",
            //backgroundColor: "orange",
            borderRadius: 20,
            width: 180,
            paddingVertical: 15
        },
        logoutword: {
            fontSize: 20,
            //paddingTop: 0,
            //paddingBottom: 20,
            //justifyContent: "center",
            //alignItems: "center",
            textAlign: "center",
            color: 'white'
        },
        word: {
            marginLeft: 8,
            marginRight: 8,
            fontSize: 16
        },
        wordtwo: {
            marginLeft: 25,
            marginRight: 8,
            fontSize: 16
        },
        wordpost: {
            marginLeft: 8,
            marginRight: 8,
            fontSize: 16
        },
        btns:{
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 40
        },
        btnup: {
            flexDirection: "row",
            justifyContent: "space-around"
        },
        btndown: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 12
        },
        btnleft: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            //backgroundColor: "pink",
            paddingHorizontal: 15,
            paddingVertical: 10,
            height: 60,
            width: 160,
            borderRadius: 12,
            marginHorizontal: 5
        },
        btnright: {
            flexDirection: "row",
            //backgroundColor: "pink",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
            height: 60,
            width: 160,
            borderRadius: 12,
            marginHorizontal: 5
        },
        btnicon: {
            height: 40,
            width: 40
        },
        btniconsave: {
            height: 40,
            width: 30
        },
        btniconlike: {
            height: 37,
            width: 40
        },
        mode: {
            backgroundColor: "gray",
            fontSize: 30,
            marginTop: 40,
            paddingVertical: 10,
            paddingLeft: 20
        },
        follow: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 50,
            marginBottom: 20
        },
        block: {
            flexDirection: "column",
            justifyContent: "center",
            gap:8
        },
        num: {
            fontSize: 16,
            textAlign:"center"
           // justifyContent: "center"
        },
        text: {
            fontSize: 25,
        },
        card: {
            marginTop: 40,
            flexDirection: "row",
            //alignItems: "center",
            marginHorizontal: 5
        },
        icon: {
            height: 50,
            width: 50
        },
        star:{
            height: 25,
            width: 25,
            marginRight: 2
        },
        stars: {
            flexDirection: "row",
            marginLeft: 15
        },
        info:{
            marginLeft: 5
        },
        user: {
            flexDirection: "row",
            alignItems: "center"
        },
        hash: {
            fontSize: 14,
            color: "gray"
        }
    }
);


