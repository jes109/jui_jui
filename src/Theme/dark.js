import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary800:"#FFFFFF",
        primary500:"#BFC499",
        primary200:"#5F720E",
        primaryContainer:"#CCFF00",
        primaryContainerDisable:"blue",
        card:"#5D625A",
        surface:"#1C1B1C",
        lightsurface:"#C4C4C4",
        midsurface:"#EDECD3",
        darksurface:"#E8E7C7",
        header:"#646561",
        focus:"#9EC52F",
    }
}

export default MyTheme;