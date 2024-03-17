import { StyleSheet, StatusBar } from "react-native"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 60 : 64

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
    },

    viewButtons: {
        marginTop: 70,
        display: 'flex',
        gap: 12,
    },
})