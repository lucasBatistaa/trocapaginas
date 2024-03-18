import { EBGaramond_700Bold, EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond"
import { StyleSheet, StatusBar } from "react-native"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: paddingTopValue,
        paddingHorizontal: 28,
        paddingBottom: 40,
    },

    h1: {
        fontFamily: 'EBGaramond_700Bold',
        fontSize: 24,
        marginBottom: 150,
    },
})