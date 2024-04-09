import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    steps: {
        alignItems: 'center', 
        gap: 8,
        paddingHorizontal: 80, 
        marginTop: 28,
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

    formInput: {
        gap: 8,
        marginVertical: 20,
    },

    button: {
        alignItems: 'center',
        marginTop: 20,
    }
})