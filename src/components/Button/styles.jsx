import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        paddingVertical: 12,
        width: 200,
    },
    
    buttonText: {
        color: THEME.colors.white,
        textAlign: 'center',
    },
})