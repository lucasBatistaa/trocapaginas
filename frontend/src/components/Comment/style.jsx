import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    principalView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },

    commentView: {
        backgroundColor: THEME.colors.white,
        padding: 20,
        gap: 20,
        marginTop: 160,
        // alignItems: 'center'
    },

    commentsList: {
        gap: 20
    },  

    comment: {
        flexDirection: 'row',
        gap: 16,
        width: '100%',
        alignSelf: 'flex-start',
    },

    commentContent: {
        gap: 4,
    },

    commentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        
        gap: 8,
    },

    textInputView: {
        flexDirection: 'row',
    },  

    textInput: {
        width: '100%',
        padding: 12,
        borderRadius: 12,
        color: THEME.colors.grayDark,
        backgroundColor: THEME.colors.grayMedium,
    },

    icon: {
        position: 'relative',
        top: 16,
        right: 32,
    }
})