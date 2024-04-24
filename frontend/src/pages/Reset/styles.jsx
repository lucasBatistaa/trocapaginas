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

    containerCodePage: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 28,
    },

    text: {
        textAlign: 'left', 
        width: 370,
        marginBottom: 90,
    },

    alert: {
        marginBottom: 36,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        gap: 8
    },

    buttonStyle: {
        marginTop: 90,
        alignItems: 'center'
    },

})