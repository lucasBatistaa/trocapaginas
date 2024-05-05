import { StyleSheet } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        paddingHorizontal: 28,
        backgroundColor: '#F2F2F2'
    },
    
    slogan: {
        textAlign: 'center',
        color: THEME.colors.black,
        marginTop: 20,
    },

    viewButtons: {
        marginTop: 60,
        display: 'flex',
        gap: 12,
    },
})