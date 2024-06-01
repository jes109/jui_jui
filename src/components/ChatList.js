import React from "react";
import { FlatList, Box, Input, InputIcon, InputField, SearchIcon, InputSlot} from "@gluestack-ui/themed";

import ChatItem from "./ChatItem";

import Chat from "../json/Chat.json"

export default ChatList = () =>{
    const renderItem=({item})=><ChatItem chat={item}/>;

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
        
        //stickyHeaderIndices={[0]}

        data={Chat}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        scrollEnabled={false}
        />
    )
}