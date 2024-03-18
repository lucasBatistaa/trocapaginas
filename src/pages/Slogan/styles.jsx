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
        color: '#0A080D',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "EBGaramond_400Regular",
        marginTop: 20,
    },

    viewButtons: {
        marginTop: 60,
        display: 'flex',
        gap: 12,
    },
})