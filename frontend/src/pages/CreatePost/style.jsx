import { StyleSheet } from "react-native"
import { StatusBar } from "react-native"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: paddingTopValue,
        // paddingHorizontal: 28,
        paddingBottom: 40,
    },

    viewAddImage: {
        flex: 45,
        backgroundColor: '#000',
    },

    viewPost: {
        flex: 55,
        padding: 28,
        gap: 20,
        borderRadius: 8,
    },

    viewRadioButtons: {
        flexDirection: 'row',
        gap: 28,
        justifyContent: 'center',
    },

    radioButton: {
        flexDirection: 'row', 
        gap: 4,
        alignItems: 'center',
    }
})