import { StyleSheet } from "react-native"
import { StatusBar } from "react-native"
import { THEME } from "../../styles/Theme"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    viewAddImage: {
        height: 250,
        backgroundColor: THEME.colors.grayMedium,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewPost: {
        gap: 20,
        padding: 28,
        marginBottom: 40,
    },
    
    viewUsername: {
        marginTop: 20,
        gap: 16,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },

    viewRadioButtons: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 28,
    },

    
})