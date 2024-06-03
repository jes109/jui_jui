import React from "react";
import { FlatList, Box, Input, InputIcon, InputField, SearchIcon, InputSlot} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ChatRoomItem from "./ChatRoomItem";
import ChatRoom from "../json/ChatRoom.json";

const ChatRoomList = () =>{
    const { navigate } = useNavigation();
    const renderItem=({item})=><ChatRoomItem chat={item}/>;

    return(

    <View>
        <FlatList
            data={ChatRoom}
            renderItem={renderItem}
            keyExtractor={(item,index)=>index+item}
            scrollEnabled={false}
        />
        <Center>
        <Box style={styles.circle}>
            <View style={styles.icon}>
                <TouchableOpacity 
                    activeOpacity={0.6}
                    onPress={() => navigate('ChatMap')}
                >
                    <Center>
                        <MaterialCommunityIcons name="map-search" size={80}/>
                    </Center>
                </TouchableOpacity>
            </View>
        </Box>
        </Center>
        <Center>
            <Text style={styles.checkmap}>(查看集合點地圖)</Text>
        </Center>
        <Box>
            <Input variant="rounded" size="lg" mb={16} w={360} mt={16} >
                <InputSlot pl={16}>
                    <InputIcon as={SearchIcon} />
                </InputSlot>
                <InputField placeholder="search"/>
            </Input>
        </Box>
    </View>
    )
}

const styles=StyleSheet.create(
    {
        checkmap: {
            color: "green",
            marginTop: 20
        },
       icon: {
        paddingTop: 10
       },
       circle: {
        marginTop: 50,
        height: 100,
        width: 120,
        backgroundColor: "lightgreen",
        borderRadius: 60
       }
    }
);

export default ChatRoomList;