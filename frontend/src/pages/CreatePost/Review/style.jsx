import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        gap: 20,
    },

    avaliation: {
        flexDirection: 'row',
        alignSelf: 'center'
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
})