import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: THEME.colors.grayMedium,
        padding: 12,
        gap: 12,
        borderRadius: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    publication: {
        flexDirection: 'row',
        gap: 12,
    },

    post: {
        flex: 1,
        gap: 8,
        justifyContent: 'space-between'
    },  

    viewStars: {
        flexDirection: 'row',
    },

    icons: {
        flexDirection: 'row',
        gap: 8,
    },

    imagePost: {
        height: 80,
        width: 80,
        borderRadius: 8,
        alignSelf: 'center'
    }
})