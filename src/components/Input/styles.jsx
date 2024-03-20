import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
    container: {
        // fontSize: 16,
        gap: 4,
    },

    label: {
        fontSize: 16,
        fontFamily: 'EBGaramond_400Regular',
    },

    input: {
        borderWidth: 1,
        borderColor: '#59372A', 
        borderRadius: 12,
        padding: 16,
        fontFamily: 'EBGaramond_400Regular',
        fontSize: 16,
    },

    icon: {
        position: 'absolute',
        right: 16,
        top: 48,
    }
})