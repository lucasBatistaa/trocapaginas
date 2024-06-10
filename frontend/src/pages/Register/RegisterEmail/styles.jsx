import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    steps: {
        alignItems: 'center', 
        gap: 8,
        marginTop: 28,
        paddingHorizontal: 80, 
    },

    stepsBarContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 4,
    },
    
    stepsBar: {
        width: '50%',
        height: 12,
        borderRadius: 4
    },
})