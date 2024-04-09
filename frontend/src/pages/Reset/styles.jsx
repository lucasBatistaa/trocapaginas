import { StyleSheet, StatusBar } from "react-native"
import { THEME } from "../../styles/Theme"

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
        gap: 50
    },
})