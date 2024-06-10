import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120
    },

    image: {
        // objectFit: 'contain'
        height: 120,
        width: 80
    },

    titleBook: {
        marginTop: 4,
        textAlign: 'center',
        alignSelf: 'stretch',
        color: THEME.colors.brownDark
    },

    authorBook: {
        textAlign: 'center',
        color: THEME.colors.brownDark
    }
})