import { StyleSheet, StatusBar } from "react-native"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: paddingTopValue,
        paddingHorizontal: 28,
        gap: 20
    },

    containerEmailPage: {
        marginVertical: 20,
        height: '65%',
        justifyContent: 'center',
    },

    alert: {
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    buttonStyle: {
        marginTop: 50,
        alignItems: 'center'
    },

    componentContainer: {
        marginTop: 94
    }
})