import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    input: (error) => ({
        flexDirection: 'row',   
        height: 52,
        borderWidth: 1,
        borderColor: error ? THEME.colors.red : THEME.colors.brownDark,
        padding: 12,
        borderRadius: 12,
        gap: 8, 
        alignItems: 'center',
        justifyContent: 'center'
    }),

    field: {
        flex: 1,
        fontSize: 16,
    }
})