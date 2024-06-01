import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, Box, Input, InputIcon, InputField, SearchIcon, InputSlot} from "@gluestack-ui/themed";

export default SettingList = () =>{

    return(
        <FlatList
        ListHeaderComponent={(
            <Box>
                <Input variant="rounded" size="lg" mb={16} w={360} mt={16} >
                    <InputSlot pl={16}>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField placeholder="search"/>
                </Input>
            </Box>
        )}
        />
    )
}