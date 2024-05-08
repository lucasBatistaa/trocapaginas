import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 28,
        paddingTop: 60,
        paddingBottom: 40,

        justifyContent: 'space-between'
    },

    textCentralized: {
        textAlign: 'center',
        marginTop: 4,
    },

    label: {
        marginTop: 12,
        marginBottom: 4,
    },

    resetPassword: {
        color: THEME.colors.brownMedium,
        textAlign: 'right',
        marginTop: 4,
    }, 

    viewButton: {
        alignItems: 'center',
        marginTop: 20,
    }
})