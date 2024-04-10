import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/Theme";

export const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,

        borderRadius: 12,
        paddingVertical: 12,

        borderWidth: 1,
        borderColor: THEME.colors.brownDark
    },
    
    buttonText: {
        fontSize: 20,
        color: THEME.colors.brownDark,
        textAlign: 'center',
        fontFamily: 'EBGaramond_700Bold'
    },

    brownDark: {
        color: THEME.colors.brownDark
    },
    
    brownLight: {
        backgroundColor: THEME.colors.brownLight
    }
})