import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 120
    },

    image: {
        height: 120,
        width: 80
    },

    titleBook: {
        marginTop: 4,
        textAlign: 'center',
        alignSelf: 'stretch',
        color: THEME.colors.brownDark,
        fontSize: 18
    },

    authorBook: {
        marginTop: 4,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: THEME.colors.brownDark
    }
})