import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: THEME.colors.grayMedium,
        borderRadius: 20,
        alignItems: 'center',
    },

    user: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },  

    image: {
        width: 32,
        height: 32,
        resizeMode: 'cover',
        borderRadius: 20
    },

    username: {
        flex: 1,
        color: THEME.colors.brownDark,
    }
})