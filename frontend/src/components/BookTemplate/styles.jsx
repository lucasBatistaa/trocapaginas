import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    container: {
        alignItems: 'start',
        width: 120
    },

    image: {
        // objectFit: 'contain'
        height: 120,
        width: 80
    },

    titleBook: {
        marginTop: 4,
        textAlign: 'start',
        alignSelf: 'stretch',
        color: THEME.colors.brownDark,
        fontSize: 18
    },

    authorBook: {
        marginTop: 4,
        alignSelf: 'stretch',
        textAlign: 'start',
        color: THEME.colors.brownDark
    }
})