import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    button: (color) => ({
        height: 48,
        width: 200,
        borderRadius: 12,
        backgroundColor: THEME.colors[color],
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }),
    
    buttonText: {
        color: THEME.colors.white,
    },
})