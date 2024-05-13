import { StyleSheet } from "react-native";
import { THEME } from "../../../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        paddingHorizontal: 32,
    },

    content: {
        backgroundColor: THEME.colors.white,
        paddingVertical: 20,
        paddingHorizontal: 28,
        borderRadius: 20,
        gap: 32,
    },

    brownDarkColor: {
        color: THEME.colors.brownDark
    },

    viewButtonsActions: {
        flexDirection: 'row',
        gap: 8,
    },

    buttonsActions: {
        paddingVertical: 8,
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: THEME.colors.brownDark,
        borderRadius: 16,
    },

    isActive: (value) => ({
        backgroundColor: value ? THEME.colors.brownLight : THEME.colors.white
    }),

    isActiveText: (value) => ({
        color: value ? THEME.colors.brownDark : THEME.colors.black,
    })
})