import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120
    },

    image: {
        objectFit: 'contain'
    },

    titleBook: {
        marginTop: 4,
        textAlign: 'center'
    },

    colorBrownDark: {
        color: THEME.colors.brownDark
    }
})