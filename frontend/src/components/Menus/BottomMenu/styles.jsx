import { StyleSheet } from "react-native";

import {THEME} from '../../../styles/Theme.jsx'

export const styles = StyleSheet.create ({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 74,
        backgroundColor: THEME.colors.brownLight,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }
})