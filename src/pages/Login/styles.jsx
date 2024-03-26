import { StyleSheet, StatusBar } from "react-native"
import { THEME } from "../../styles/Theme"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: paddingTopValue,
        paddingHorizontal: 28,
        paddingBottom: 40,

        justifyContent: 'space-between'
    },

    formInput: {
        gap: 8,
        marginVertical: 20,
    },

    inputError: {
        borderColor: THEME.colors.red,
    },

    textError: {
        color: THEME.colors.red,
        textAlign: 'center',
    },

    resetPassword: {
        color: THEME.colors.brownMedium,
        textAlign: 'right'
    }, 

    access: {
        alignItems: 'center',
        gap: 36,
    }
})