import React from "react";
import { useState } from "react";
import { Appearance, Dimensions, useColorScheme } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import { View, Box, Image, Pressable, Text, Center, ScrollView } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ChatList from "../components/ChatList";
import ChatHeader from "../components/ChatHeader"

const AnimatedBox=Animated.createAnimatedComponent(Box);
const AnimatedCenter=Animated.createAnimatedComponent(Center);
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedIonicon = Animated.createAnimatedComponent(Ionicon);

const WIDTH = Dimensions.get("window").width*0.7;

const Colors = {
    dark: {
      background: "#1E1E1E",
      circle: "#252525",
      icon: "#000",
      text: "#F8F8F8",
    },
    light: {
      background: "#F8F8F8",
      circle: "#FFF",
      icon: "#F4F4F5",
      text: "#1E1E1E",
    },
  };

export default GameScreen = ({navigation}) => {
    const systemColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useState(systemColorScheme);
    //const {colors} =useTheme();

    const toggleColorMode = () => {
        const nextColorScheme = colorScheme === "light" ? "dark" : "light";
        setColorScheme(nextColorScheme);
    };

    const progress = useDerivedValue(() => {
        return withTiming(colorScheme === "dark" ? 1 : 0, { duration: 2000 });
    });

    const animatedStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
          progress.value,
          [0, 1],
          [Colors.light.background, Colors.dark.background]
    );
    
    return {
        backgroundColor,
    };
    });

    const animatedCircleStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
          progress.value,
          [0, 1],
          [Colors.light.circle, Colors.dark.circle]
    );
    
    return {
        backgroundColor,
    };
    });

    const animatedIconStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
          progress.value,
          [0, 1],
          [Colors.light.icon, Colors.dark.icon]
    );
    
    return {
        backgroundColor,
    };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const color = interpolateColor(
          progress.value,
          [0, 1],
          [Colors.light.text, Colors.dark.text]
    );
    
    return {
        color,
    };
    });

    return(
    <AnimatedCenter flex={1} style={animatedStyle}>
      <AnimatedText
        fontSize={50}
        fontWeight={"700"}
        letterSpacing={14}
        marginBottom={35}
        style={animatedTextStyle}
      >
        outdoor
      </AnimatedText>
      <AnimatedCenter
        w={WIDTH}
        h={WIDTH}
        borderRadius={WIDTH / 2}
        shadow="4"
        style={animatedCircleStyle}
      >
        <Pressable onPress={toggleColorMode}>
          <AnimatedBox borderRadius={40} style={animatedIconStyle}>
            <AnimatedIonicon
              name={colorScheme == "dark" ? "moon-outline" : "sunny-outline"}
              size={40}
              style={animatedTextStyle}
            />
          </AnimatedBox>
        </Pressable>
      </AnimatedCenter>
    </AnimatedCenter>
    );
}
