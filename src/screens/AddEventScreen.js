import React from "react";
import { useState,useRef } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {Heading,CloseIcon,ModalFooter,Button,ButtonText,ModalCloseButton, ModalContent,ModalHeader,Modal,ModalBackdrop,ModalBody,Box, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, Text, HStack,Pressable,Icon,AddIcon, ScrollView} from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import UnAddActionSheet from "../components/UnAddActionSheet";

export default AddEventScreen = () =>{
    const {colors} =useTheme();
    const {goBack}=useNavigation();
    const ref = React.useRef(null)

    const [showModal, setShowModal] = useState(false)
    console.log(showModal)

    return(
        <ScrollView bg={colors.surface} pt={60} >
        <UnAddActionSheet />
        <Box alignItems="center"> 
            <Box bg={colors.lightsurface} w={350} rounded="$2xl" my={20} alignItems="center">
                <TextInput style={[styles.maininput,{backgroundColor:colors.midsurface},{color:colors.primary800}]} placeholder="活動名稱"/>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Box mt={20} w={300} h={200} borderColor="gray" borderWidth={2} rounded="$2xl" alignItems="center" justifyContent="center">
                        <MaterialCommunityIcons name="upload" size={48} color="gray"/>
                        <Text color="gray">update image</Text>
                    </Box>
                </TouchableOpacity>
                <Box px={12} pb={20} bg={colors.midsurface} w={300} h="auto" rounded="$3xl" mt={20} mb={80}>
                    <HStack alignItems="center">
                        <Text color={colors.primary800} size="md" bold="true">日期 :</Text>
                        <TextInput style={[styles.secondInput,{color:colors.primary800}]} maxLength={10} placeholder="ex.2023/04/14"/>
                    </HStack>
                    <HStack alignItems="center">
                        <Text color={colors.primary800} size="md" bold="true">地點 :</Text>
                        <TextInput style={[styles.secondInput,{color:colors.primary800}]} placeholder="地點"/>
                    </HStack>
                    <HStack alignItems="center">
                        <Text color={colors.primary800} size="md" bold="true">人數 :</Text>
                        <TextInput style={[styles.secondInput,{color:colors.primary800}]} placeholder="人數"/>
                    </HStack>
                    <HStack alignItems="flex-start">
                        <Text mt={16} color={colors.primary800} size="md" bold="true">敘述 :</Text>
                        <TextInput scrollEnabled={false} numberOfLines={2} multiline={true} style={[styles.textInput,{color:colors.primary800}]} placeholder="敘述"/>
                    </HStack>
                </Box>
                <TouchableOpacity style={styles.fab} activeOpacity={0.6} onPress={()=>goBack()}>
                    <HStack bg={colors.primaryContainer}  py={12} rounded="$full" flex={1} justifyContent="center">
                        <Icon as={AddIcon} color={colors.primary800}/>
                        <Text color={colors.primary800} bold={true}>發佈</Text>
                    </HStack>
                </TouchableOpacity>
            </Box>
        </Box>
        <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        >
        <ModalBackdrop />
        <ModalContent bg={colors.lightsurface}>
          <ModalHeader>
            <Heading size="lg" color={colors.primary800}>選擇封面</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Box bg={colors.primary500} w={280} h={280} alignSelf="center"/>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
        </Modal>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    maininput:{
        marginTop:20,
        borderRadius:28,
        padding:16,
        width:300,
        fontSize:24,
        fontWeight:"bold"
    },
    secondInput:{
        borderRadius:28,
        padding:16,
        width:240,
        fontSize:16,
        //backgroundColor:"gray"
    },
    textInput:{
        borderRadius:28,
        padding:16,
        paddingTop:16,
        width:240,
        fontSize:16,
        //backgroundColor:"gray"
    },
    fab:{
        width:80,
        position:"absolute",
        right:12,
        bottom:20,
        zIndex:999,
        shadowColor: "#000",
        shadowOffset: {
	        width: 2,
	        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    }
});