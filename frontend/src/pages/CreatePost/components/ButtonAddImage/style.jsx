import { StyleSheet } from "react-native";
import { THEME } from "../../../../styles/Theme";

export const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,

        borderRadius: 12,
        padding: 12,
        backgroundColor: THEME.colors.grayMedium,
    },
    
    buttonText: {
        fontSize: 20,
        color: THEME.colors.black,
        textAlign: 'center',
        fontFamily: 'EBGaramond_700Bold'
    },
})