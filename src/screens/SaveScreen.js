import React, { useEffect } from "react";
import { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab"
import { Box,Center,Pressable,Text ,FlatList, ScrollView} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation,useTheme } from '@react-navigation/native';

import EventList from "../components/EventList"
import JoinItem from "../components/JoinItem";
import MarkItem from "../components/MarkItem";

import Events from "../json/Events.json"
import { useDispatch, useSelector } from "react-redux";
import {selectActivity,fetchActivities} from "../redux/avtivitySlice"

export default SaveScreen = () => {
    const {colors} =useTheme();

    const [segmentIndex,setSegmentIndex] = useState(0);
    const SegmentContent = () =>!segmentIndex? <Join/>:<Mark/>

    return(
        <Box bg={colors.surface} flex={1} >
            <SegmentedControlTab 
            values={["已參加","收藏"]}
            tabStyle={{
                marginTop:20,
                marginBottom:20,
                borderWidth:2,
                backgroundColor:"transparent",
                borderColor:colors.primary800
            }}
            firstTabStyle={{marginLeft:20 ,borderTopLeftRadius:20,borderBottomLeftRadius:20}}
            lastTabStyle={{marginRight:20 ,borderTopRightRadius:20,borderBottomRightRadius:20}}
            tabTextStyle={{color:colors.primary800,padding:4}}
            activeTabStyle={{backgroundColor:colors.lightsurface}}
            activeTabTextStyle={{color:colors.primary800}}
            selectedIndex={segmentIndex}
            onTabPress={(index)=>setSegmentIndex(index)} />
            <Box flex={1}>
            <SegmentContent/>
            </Box>

        </Box>
    )
}

const Mark=()=>{
    const dispatch = useDispatch();
    const activities = useSelector(selectActivity);

    useEffect(() => {
        dispatch(fetchActivities());
    }, [dispatch]);
    const renderItem=({item})=>item.mark?<MarkItem event={item}/>:null;

    return(
        <ScrollView>
        <Center>
            <FlatList
            data={activities}
            renderItem={renderItem}
            keyExtractor={(item,index)=>index+item}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            />
        </Center>
        </ScrollView>
    )
}
const Join=()=>{
    const dispatch = useDispatch();
    const activities = useSelector(selectActivity);

    useEffect(() => {
        dispatch(fetchActivities());
    }, [dispatch]);
    const renderItem=({item})=>item.join?<JoinItem event={item}/>:null;

    return(
        <Center>
            <FlatList
            data={activities}
            renderItem={renderItem}
            keyExtractor={(item,index)=>index+item}
            showsVerticalScrollIndicator={false}
            />
        </Center>
    )
}

const styles=StyleSheet.create(
    {
        btn:{
            padding:10,
            width:150,
            color:"#fff",
            backgroundColor:"black"
        }
    }
);
