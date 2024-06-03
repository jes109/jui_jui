import React, { useState } from "react";
import {InputIcon,EyeOffIcon,EyeIcon,Image,Box,VStack,Text, FormControl, Input, InputField, ScrollView,Center, InputSlot, HStack } from "@gluestack-ui/themed"
import {TouchableOpacity } from "react-native";
import {useDispatch} from "react-redux"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useFonts } from "expo-font";

import { gotoSignup} from "../redux/accountSlice";
import {useSignin} from "../tanstack-query"


 const LoginScreen=({theme})=>{
    const {mutate,data,isSuccess,isError,error}=useSignin();

    const {colors}=theme;

    const dispatch=useDispatch();
    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
    /*
    const general=useSelector(selectGeneral);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [emailIsError, setEmailIsError] = useState(false);
    const [passwordIsError, setPasswordIsError] = useState(false);
    const passwordRegex=/^[a-zA-Z]+\w*$/;
    const emailRegex=/\w{3,}@[a-zA_Z_]+\.[a-zA_Z]{2,5}/
    */
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    const [fontsLoaded]=useFonts({
        "jf":require("../../assets/fonts/jf-openhuninn-2.0.ttf")
    });
    if(!fontsLoaded){
        return <Text>Font is Loading...</Text>;
    }
        /*
    useEffect(()=>{
        if (isInitialRender) {
            setIsInitialRender(false); 
          } 
        else {
            if(!passwordIsError && !emailIsError)
            dispatch(setGeneralAccount({password,email}))
            if (passwordRegex.test(password)) setPasswordIsError(false);
            else setPasswordIsError(true);
            if (emailRegex.test(email)) setEmailIsError(false);
            else setEmailIsError(true);
        }
    },[password,email])
*/

    return(
        <ScrollView scrollEnabled={false} bg={colors.lightsurface} flex={1}>
                <Center mt={132} >
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
                            fontSize="$lg"
                            color={colors.primary800}
                            placeholderTextColor={colors.loginlight}
                            placeholder="電子郵件"
                            fontFamily="jf"
                            type="email"
                            value={email}
                            onChangeText={(email)=>{setEmail(email)
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
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChangeText={(password)=>{setPassword(password)}}
                            />
                            <InputSlot pr="$3" onPress={handleState}>
                                <InputIcon
                                size="xl"
                                as={showPassword ? EyeIcon : EyeOffIcon}
                                color={colors.loginlight}
                                />
                            </InputSlot>
                        </Input>
                    </FormControl>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=>mutate({email,password})}>
                        <Box w="$full" py={8} rounded="$full" bg="#194200" >
                        <Text color="#fff" size="2xl" textAlign="center" fontFamily="jf">登入</Text>
                        </Box>
                    </TouchableOpacity>
                    <Center>
                    <HStack>
                    <Text fontSize="$lg" color="#707769" fontFamily="jf">還沒有帳號 ?</Text>
                    <TouchableOpacity onPress={()=>dispatch(gotoSignup())}><Text fontSize="$lg" ml={8} color="#FFA800" fontFamily="jf">點我註冊</Text></TouchableOpacity>
                    </HStack>
                    </Center>
                    <Text fontFamily="jf" color="red">{error?.message}</Text>
                </VStack>
        </ScrollView>
    )
}

export default LoginScreen;

{
    /*
    <FormControlError isInvalid={emailIsError}>
        <FormControlErrorIcon as={AlertCircleIcon}/> 
        <FormControlErrorText fontFamily="jf">帳號輸入錯誤</FormControlErrorText>
    </FormControlError>
    <FormControlError isInvalid={passwordIsError}>
        <FormControlErrorIcon as={AlertCircleIcon}/> 
        <FormControlErrorText fontFamily="jf">密碼輸入錯誤</FormControlErrorText>
    </FormControlError>
    */
}