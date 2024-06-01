import React,{ useState,useEffect } from "react";
import {Image,Box,AlertCircleIcon,VStack,Text, FormControl, Input, InputField, ScrollView, FormControlError, FormControlErrorText, FormControlErrorIcon, Center, InputSlot, HStack } from "@gluestack-ui/themed"
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector,useDispatch} from "react-redux"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useFonts } from "expo-font";

import { gotoSignup, selectGeneral } from "../redux/accountSlice";
import { setGeneralAccount,login} from "../redux/accountSlice";


 const LoginScreen=({theme})=>{
    const {colors}=theme;

    const general=useSelector(selectGeneral);
    const dispatch=useDispatch();

    const [isInitialRender, setIsInitialRender] = useState(true);
    const [name,setName]=useState(general.name);
    const [email,setEmail]=useState(general.email);
    const [nameIsError, setNameIsError] = useState(false);
    const [emailIsError, setEmailIsError] = useState(false);
    
    const nameRegex=/^[a-zA-Z]+\w*$/;
    const emailRegex=/\w{3,}@[a-zA_Z_]+\.[a-zA_Z]{2,5}/

    const [fontsLoaded]=useFonts({
        "jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")
    });
    useEffect(()=>{
        if (isInitialRender) {
            setIsInitialRender(false); 
          } 
        else {
            if(!nameIsError && !emailIsError)
            dispatch(setGeneralAccount({name,email}))
            if (nameRegex.test(name)) setNameIsError(false);
            else setNameIsError(true);
            if (emailRegex.test(email)) setEmailIsError(false);
            else setEmailIsError(true);
        }
    },[name,email])

        
    if(!fontsLoaded){
        return <Text>Loading...</Text>;
    }

    return(
        <ScrollView scrollEnabled={false} bg={colors.lightsurface} flex={1}>
                <Center mt={120} >
                    <Image source={require("../img/logo.png")} alt="logo" w={150} h={100} resizeMode="contain"/>
                    <Text py={12} fontSize={40} color="#194200" fontFamily="jf">登入</Text>
                </Center>
                <VStack gap={20} space={2} mt={12} px={28} py={40} alignSelf="center" bg={colors.logincard} rounded="$3xl" >
                    <FormControl mb={5} isRequired w={280}>
                        <Input variant="underlined" borderColor={colors.primary500}>
                            <InputSlot pr={12}>
                                <AntDesign name="mail" size={24} color={colors.primary800}/>
                            </InputSlot>
                            <InputField 
                            color={colors.primary800}
                            placeholderTextColor={colors.loginlight}
                            placeholder="電子郵件"
                            fontFamily="jf"
                            value={email}
                            onChangeText={(email)=>{setEmail(email)
                            }}/>
                        </Input>
                        <FormControlError isInvalid={emailIsError}>
                            <FormControlErrorIcon as={AlertCircleIcon}/> 
                            <FormControlErrorText fontFamily="jf">帳號輸入錯誤</FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                    <FormControl mb={5} isRequired w={280}>
                        <Input variant="underlined" borderColor={colors.primary500}>
                        <InputSlot pr={12}>
                        <AntDesign name="lock1" size={24} color={colors.primary800}/>
                        </InputSlot>
                            <InputField 
                            color={colors.primary800}
                            placeholderTextColor={colors.loginlight}
                            placeholder="密碼"
                            value={name}
                            fontFamily="jf"
                            onChangeText={(name)=>{setName(name)}}
                            />
                        </Input>
                        <FormControlError isInvalid={nameIsError}>
                            <FormControlErrorIcon as={AlertCircleIcon}/> 
                            <FormControlErrorText fontFamily="jf">密碼輸入錯誤</FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                    <TouchableOpacity onPress={()=>{

                        if(!nameIsError && !emailIsError)dispatch(login());
                        }}>
                        <Box w="$full" py={8} rounded="$full" bg="#194200" >
                        <Text color="#fff" size="2xl" textAlign="center" fontFamily="jf">登入</Text>
                        </Box>
                    </TouchableOpacity>
                    <HStack>
                    <Text color="#707769" fontFamily="jf">還沒有帳號 ?</Text>
                    <TouchableOpacity onPress={()=>dispatch(gotoSignup())}><Text ml={8} color="#FFA800" fontFamily="jf">點我註冊</Text></TouchableOpacity>
                    </HStack>
                </VStack>
        </ScrollView>
    )
}

export default LoginScreen;