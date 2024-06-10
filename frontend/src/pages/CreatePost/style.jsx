import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    viewAddImage: {
        height: 250,
        backgroundColor: THEME.colors.grayMedium,
        justifyContent: 'center',
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewWrapper: {
        marginTop: -20, // Ajuste conforme necessário
        borderRadius: 20,
        overflow: 'hidden',

        position: 'relative',
        zIndex: 1,
    },

    viewPost: {
        
        borderRadius: 20,
        gap: 20,
        padding: 28,
    },
    
    viewUsername: {
        marginTop:20,
        gap: 16,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },

    username: {
        color: THEME.colors.brownDark
    },

    viewRadioButtons: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 28,
    },
})