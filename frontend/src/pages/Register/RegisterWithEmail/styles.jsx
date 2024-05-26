import { StyleSheet } from "react-native"
import { THEME } from "../../../styles/Theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 28,
        paddingTop: 60,
        paddingBottom: 40,
        justifyContent: 'space-between'
    },

    header: {
        gap: 28,
    },

    stepsContainer: {
        alignItems: 'center',
        gap: 8,
    },

    stepsBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center', 
        gap: 4,
    },
    
    stepsBar: (isCurrentStep) => ({
        width: 80,
        height: 12,
        borderRadius: 4,
        backgroundColor: isCurrentStep ? THEME.colors.brownDark : THEME.colors.grayDark,
    }),

    label: {
        marginTop: 12,
        marginBottom: 4,
    },

    viewButton: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    }
})