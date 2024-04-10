import { StyleSheet } from "react-native"
import { THEME } from "../../../styles/Theme"

export const styles = StyleSheet.create({
    button: {
        width: 200,
        borderRadius: 12,
        paddingVertical: 12,
    },
    
    buttonText: {
        fontSize: 20,
        color: THEME.colors.white,
        textAlign: 'center',
        fontFamily: 'EBGaramond_700Bold'
    },

    brownDark: {
        backgroundColor: THEME.colors.brownDark
    },
    
    brownLight: {
        backgroundColor: THEME.colors.brownMedium
    }
})