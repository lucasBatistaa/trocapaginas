import { StyleSheet, StatusBar } from "react-native"
import { THEME } from "../../styles/Theme"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create ({
    messageError: {
        color: THEME.colors.red,
        textAlign: 'center',
    },
})