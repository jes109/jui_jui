import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
//import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Center } from "@gluestack-ui/themed";

const SettingHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle}>
      <Center>
        <Text style={styles.textStyle}>設定</Text>
      </Center>
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

export default SettingHeader;