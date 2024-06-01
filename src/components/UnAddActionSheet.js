import React from "react";
import { useState } from "react";
import {Text, Actionsheet,ActionsheetBackdrop,ActionsheetContent, Box ,ActionsheetDragIndicatorWrapper,ActionsheetItem,ActionsheetItemText,ActionsheetDragIndicator} from "@gluestack-ui/themed";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useTheme } from "@react-navigation/native";

export default unAddActionSheet=()=>{
    const [showActionSheet,setshowActionSheet]=useState(false);
    const handleClose=()=>setshowActionSheet(!showActionSheet);
    const {colors}=useTheme();
    const {goBack} =useNavigation();

    return(
        <Box pl={12} >
          <AntDesign
          style={[{alignSelf:"flex-end"},{marginRight:20}]}
          name="closecircleo"
          size={25}
          color={colors.primary500}
          onPress={handleClose}
          />
          <Actionsheet isOpen={showActionSheet} onClose={handleClose} zIndex={999}>
            <ActionsheetBackdrop/>
            <ActionsheetContent bg={colors.lightsurface} pb={32}>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <Text size="lg" py={20} color={colors.primary500} >確定要離開嗎?</Text>
                <ActionsheetItem onPress={handleClose}>
                    <ActionsheetItemText size="lg" color={colors.primary800} >繼續編輯</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem onPress={()=>{handleClose();goBack()}}>
                    <ActionsheetItemText color="red"  size="lg" >離開</ActionsheetItemText>
                </ActionsheetItem>
            </ActionsheetContent>
        </Actionsheet>
    </Box>
    )
}