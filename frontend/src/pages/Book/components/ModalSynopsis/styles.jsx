import { StyleSheet } from "react-native";
import { THEME } from "../../../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        paddingHorizontal: 32,
    },

    innerContainer: {
        maxHeight: '60%',
        backgroundColor: THEME.colors.white,
        borderRadius: 20,
        paddingVertical: 28,
    },  
    
    content: {
        paddingHorizontal: 28,
        // paddingBottom: '-28',
        gap: 12,
        
        alignItems: 'center'
    },

    colorDarkBrown: {
        color: THEME.colors.brownDark
    },

    text: {
        textAlign: 'justify'
    }
})