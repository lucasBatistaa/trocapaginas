import { StyleSheet, StatusBar } from "react-native"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center', 
        paddingTop: paddingTopValue,
        paddingHorizontal: 28,
        backgroundColor: '#F2F2F2'
    },
    
    slogan: {
        marginTop: 20,
        textAlign: 'center',
        color: '#0A080D',
    },

    viewButtons: {
        display: 'flex',
        gap: 12,
        marginTop: 60,
    },
})