import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    button: {
        height: 60,
        flexDirection: 'row',
        padding: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        borderWidth: 1,
        borderColor: THEME.colors.brownDark
    },
    
    buttonText: {
        color: THEME.colors.brownDark,
    },
})