import { StyleSheet, StatusBar } from "react-native";

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: paddingTopValue,
        paddingHorizontal: 28,
        paddingBottom: 40,

        justifyContent: 'space-between',
    },

    buttonsView: {
        gap: 12,
    }
})