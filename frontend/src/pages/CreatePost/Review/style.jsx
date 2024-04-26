import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textInput: {
        width: '100%',
        padding: 12,
        borderRadius: 12,
        color: THEME.colors.grayDark,
        backgroundColor: THEME.colors.grayMedium,
    },

    avaliation: {
        flexDirection: 'row',
    }
})