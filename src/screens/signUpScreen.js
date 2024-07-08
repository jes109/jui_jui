import React,{ useState } from "react";
import {Image,HStack,Box,AlertCircleIcon,VStack,Text, FormControl, Input, InputField, ScrollView, FormControlError, FormControlErrorText, FormControlErrorIcon, Center, InputSlot } from "@gluestack-ui/themed"
import { TouchableOpacity } from "react-native";
import { useSelector,useDispatch} from "react-redux"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useFonts } from "expo-font";

import { gotoSignin } from "../redux/accountSlice";

import {useSignup} from "../tanstack-query"

 const LoginScreen=({theme})=>{
    const {mutate,error}=useSignup();
    const dispatch=useDispatch();

    const {colors}=theme;
    /*
    const general=useSelector(selectGeneral);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [passwordIsError, setPasswordIsError] = useState(false);
    const [emailIsError, setEmailIsError] = useState(false);

    const passwordRegex=/^[a-zA-Z]+\w*$/;
    const emailRegex=/\w{3,}@[a-zA_Z_]+\.[a-zA_Z]{2,5}/

    useEffect(()=>{
        if (isInitialRender) {
            setIsInitialRender(false); 
          } 
        else {
            if(!passwordIsError && !emailIsError)
            dispatch(setGeneralAccount({password,email,name}))
            if (passwordRegex.test(password)) setPasswordIsError(false);
            else setPasswordIsError(true);
            if (emailRegex.test(email)) setEmailIsError(false);
            else setEmailIsError(true);
        }
    },[password,email])
    */
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [fontsLoaded]=useFonts({"jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")}); 
    if(!fontsLoaded){return <Text>Font is Loading...</Text>;}

    return(
        <ScrollView bg={colors.lightsurface} flex={1}>
                <Center mt={120} >
                    <Text py={12} fontSize={40} color="#194200" fontFamily="jf">註冊</Text>
                </Center>
                <VStack gap={20} space={2} mt={12} px={28} py={40} alignSelf="center" bg={colors.logincard} rounded="$3xl" >
                    <Image alignSelf="center" source={require("../img/cover.png")} alt="logo" w={100} h={100} rounded="$full"/>
                    <FormControl mb={5} isRequired w={280}>
                        <Input variant="underlined" borderColor={colors.primary500}>
                            <InputSlot pr={12}>
                                <AntDesign name="user" size={24} color={colors.primary800}/>
                            </InputSlot>
                            <InputField 
                            fontSize="$lg"
                            color={colors.primary800}
                            placeholderTextColor={colors.loginlight}
                            placeholder="名字"
                            fontFamily="jf"
                            type="name"
                            value={name}
                            onChangeText={(name)=>{setName(name)}}/>
                        </Input>
                    </FormControl>
                    <FormControl mb={5} isRequired w={280}>
                        <Input variant="underlined" borderColor={colors.primary500}>
                            <InputSlot pr={12}>
                                <AntDesign name="mail" size={24} color={colors.primary800}/>
                            </InputSlot>
                            <InputField 
                            fontSize="$lg"
                            color={colors.primary800}
                            placeholderTextColor={colors.loginlight}
                            placeholder="電子郵件"
                            fontFamily="jf"
                            type="email"
                            value={email}
                            onChangeText={(email)=>{setEmail(email)
                            keyboardType="email-address"
                            }}/>
                        </Input>
                    </FormControl>
                    <FormControl mb={5} isRequired w={280}>
                        <Input variant="underlined" borderColor={colors.primary500}>
                        <InputSlot pr={12}>
                        <AntDesign name="lock1" size={24} color={colors.primary800}/>
                        </InputSlot>
                            <InputField 
                            fontSize="$lg"
                            color={colors.primary800}
                            placeholderTextColor={colors.loginlight}
                            placeholder="密碼"
                            fontFamily="jf"
                            type="password"
                            value={password}
                            onChangeText={(password)=>{setPassword(password)}}
                            />
                        </Input>
                    </FormControl>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=>mutate({name,email,password})}>
                        <Box w="$full" py={8} rounded="$full" bg="#194200" >
                        <Text color="#fff" size="2xl" textAlign="center" fontFamily="jf">註冊</Text>
                        </Box>
                    </TouchableOpacity>
                    <Center>
                    <HStack>
                    <Text fontSize="$lg" color="#707769" fontFamily="jf">已經有帳號 ?</Text>
                    <TouchableOpacity onPress={()=>{dispatch(gotoSignin());}}><Text fontSize="$lg" ml={8} color="#FFA800" fontFamily="jf">點我登入</Text></TouchableOpacity>
                    </HStack>
                    </Center>
                    <Text fontFamily="jf" color="red">{error?.message}</Text>
                </VStack>
        </ScrollView>
    )
}

export default LoginScreen;