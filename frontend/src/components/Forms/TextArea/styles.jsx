import { StyleSheet } from "react-native"
import { THEME } from "../../../styles/Theme"

export const styles = StyleSheet.create({
    textArea: (error) => ({
        padding: 12,
        borderRadius: 12,
        color: THEME.colors.grayDark,
        backgroundColor: THEME.colors.grayMedium,
        textAlignVertical: 'top',
        borderWidth: error ? 1 : 0,
        borderColor: error && THEME.colors.red,
    }),
})