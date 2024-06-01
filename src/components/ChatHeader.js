import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
//import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const ChatHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>聊天室</Text>
        <View style={styles.icons}>
            <Pressable style={{marginRight: 10}}>
                <Image 
                    style={styles.icon} 
                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/group_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                />
            </Pressable>
            <Pressable>
                <Image 
                    style={styles.icon} 
                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/edit_square_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                />
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    //height: 60,
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "row",
    paddingTop: 60
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.2,
    // Android Only
    //elevation: 4
  },
  textStyle: {
    fontSize: 25
  },
  icon: {
    width: 30,
    height: 30
  },
  icons: {
    flexDirection: "row"
  }
});

export default ChatHeader;