import { StyleSheet } from "react-native"

import { THEME } from "../../../styles/Theme.jsx"

export const styles = StyleSheet.create ({
    container: {
        gap: 4,
    },

    label: {
        fontSize: 16,
        fontFamily: 'EBGaramond_400Regular',
    },

    input: {
        borderWidth: 1,
        borderColor: THEME.colors.brownDark,
        borderRadius: 12,
        padding: 16,
        fontFamily: 'EBGaramond_400Regular',
        fontSize: 16,
    },

    error: {
        borderColor: THEME.colors.red,
    },

    icon: {
        position: 'absolute',
        right: 16,
        top: 48,
    }
})