import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    container: {
        justifyContent: 'center'
    },

    label: {
        marginTop: 12,
        marginBottom: 4,
    },

    requirementsContainer: {
        gap: 12,
        marginVertical: 12,
    }, 

    requirementAlert: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    viewButton: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    }
})