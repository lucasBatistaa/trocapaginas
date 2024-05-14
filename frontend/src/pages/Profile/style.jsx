import { StyleSheet } from "react-native"

import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
        paddingVertical: 48,
        borderBottomColor: 'rgba(207, 177, 140, 0.3)',
        borderBottomWidth: 1,
    },

    tabView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    tabButton: (active) => ({
        flex: 1,
        width: 120,
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: active ? THEME.colors.brownLight : THEME.colors.brownDark
    }),

    tabTitle: (active) => ({
        color: active ? THEME.colors.white : THEME.colors.brownDark,
    }),
})