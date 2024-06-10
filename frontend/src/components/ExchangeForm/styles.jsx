import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

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
        gap: 12,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    labelAndinput: {
        gap: 4
    },

    title: {
        color: THEME.colors.brownDark
    }
})