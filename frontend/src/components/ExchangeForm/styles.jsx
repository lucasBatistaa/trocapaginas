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

    contentBookToExchange: {
        flex: 1,
        backgroundColor: THEME.colors.white,
        paddingVertical: 20,
        paddingHorizontal: 28,
        // justifyContent: 'space-between',
        gap: 12,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    labelAndInput: {
        position: 'relative',
        gap: 4
    },

    title: {
        color: THEME.colors.brownDark
    },

    input: (error) =>  ({
        flexDirection: 'row',  
        height: 52,
        borderWidth: 1,
        borderColor: error ? THEME.colors.red : THEME.colors.brownDark,
        padding: 12,
        borderRadius: 12,
        gap: 4,
        alignItems: 'center',        
    }),

    textInput: {
        flex: 1,
        fontSize: 16,
    },

    listBooks: {
        flex: 1,
        gap: 12,
    },

    book: (selected) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        borderWidth: 1,
        borderColor: selected ? THEME.colors.brownDark : THEME.colors.grayMedium,
        borderRadius: 8,
        padding: 8,
    }),

    imageBook: { 
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 4,
    },

    templateThumbnail: {
        height: 40,
        width: 40,
        backgroundColor: THEME.colors.grayMedium,
        borderRadius: 4,
    },

    titleBook: {
        flex: 1,
        color: THEME.colors.brownDark
    },
})