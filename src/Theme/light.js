import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary800:"#194200",
        primary500:"#707769",
        primary200:"#D6E0CC",
        primaryContainer:"#D9FF8A",
        primaryContainerDisable:"#EDF2E7",
        card:"#F6F7EF",
        surface:"#ADB7A8",
        lightsurface:"#EDF2E7",
        midsurface:"#EDECD3",
        darksurface:"#E8E7C7",
        header:"#F6F7E3",
        focus:"#FFC700",
    }
}

export default MyTheme;