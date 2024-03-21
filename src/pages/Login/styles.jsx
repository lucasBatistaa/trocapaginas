import { StyleSheet, StatusBar } from "react-native"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: paddingTopValue,
        paddingHorizontal: 28,
        paddingBottom: 40,

        justifyContent: 'space-between'
    },

    h1: {
        fontFamily: 'EBGaramond_700Bold',
        fontSize: 24,
    },

    formInput: {
        gap: 8,
        marginBottom: 4,
    },

    resetPassword: {
        // fontSize: 14,
        marginTop: 4,
        fontFamily: 'EBGaramond_500Medium',
        color: '#826059',
    }, 

    main: {
        // flex: 1,
        alignItems: 'center',
        // justifyContent: 'flex-end',
        gap: 36,
    }
})