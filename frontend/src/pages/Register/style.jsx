import { StatusBar, StyleSheet } from "react-native"
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

    steps: {
        alignItems: 'center', 
        gap: 8,
        paddingHorizontal: 80, 
        marginTop: 28,
    },

    stepsBarContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 4,
    },
    
    stepsBar: {
        width: '50%',
        height: 12,
        borderRadius: 4
    },

    formInput: {
        gap: 8,
        marginVertical: 20,
    },

    inputError: {
        borderColor: THEME.colors.red,
    },

    messageError: {
        color: THEME.colors.red,
        textAlign: 'center',
        marginBottom: 20,
    },

    access: {
        alignItems: 'center',
        gap: 36,
    }
})