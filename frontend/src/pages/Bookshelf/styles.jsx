import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

    bookshelf: {
        
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',

        paddingHorizontal: 40,
        paddingVertical: 20,
        columnGap: 60,
        rowGap: 20,
    },

    title: {
        color: THEME.colors.brownDark,
        textAlign: 'center',
    }
})