import { StyleSheet } from "react-native"

import { THEME } from '../../../styles/Theme'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 22,
        padding: 12,
        marginBottom: 16,

        borderWidth: 1, 
        borderColor:  THEME.colors.grayMedium, 
        borderRadius: 20, 
    },

    imageBook: {
        width: 68, 
        height: 92, 
        borderRadius: 7
    }
})