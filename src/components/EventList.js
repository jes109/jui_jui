import React, { useEffect, useState } from "react";
import { FlatList, InputIcon,InputSlot } from "@gluestack-ui/themed";
import { Box, Input, InputField,SearchIcon ,Text} from "@gluestack-ui/themed";
import {useTheme } from '@react-navigation/native';
import { useFonts } from "expo-font";

import EventItem from "./EventItem";
import Events from "../json/Events.json"
import { getActs } from "../api/firebase";
import { useDispatch, useSelector } from "react-redux";
import {fetchActivities,selectActivity} from "../redux/avtivitySlice";

export default EventList = () =>{
    const { colors } = useTheme();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const activities = useSelector(selectActivity);

    useEffect(() => {
        dispatch(fetchActivities());
        console.log(activities)
    }, []);

    if (activities.length === 0) {
        return <Text>Loading...</Text>;
    }
    /*
    useEffect(() => {
        const fetchData = async () => {
          const actsData = await getActs();
          setData(actsData);
        };
        fetchData();
      }, []);

      useEffect(() => {
        console.log(data);
      }, [data]);
    */
    const renderItem=({item})=><EventItem event={item}/>;
    return(
        <FlatList
        ListHeaderComponent={(
            <Box bg={colors.surface}>
                <Input variant="rounded" size="lg" mb={16} w={360} mt={16} bg={colors.lightsurface}>
                    <InputSlot pl={16}>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField fontFamily="jf" placeholder="search"/>
                </Input>
            </Box>
        )}
        stickyHeaderIndices={[0]}
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        showsVerticalScrollIndicator={false}
        />
    )
}