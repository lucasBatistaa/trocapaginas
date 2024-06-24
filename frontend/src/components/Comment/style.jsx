import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    principalView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    clickClose: {
        height: 160,
    },

    commentView: {
        flex: 1,
        backgroundColor: THEME.colors.white,
        padding: 20,
        gap: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },

    gestureDropDown: {
        backgroundColor: THEME.colors.grayMedium,
        width: 80,
        height: 4,
        borderRadius: 4,
        alignSelf: 'center',
        marginBottom: 8
    },

    titleModal: {
        color: THEME.colors.brownDark,
        alignSelf: 'center'
    },  

    commentsList: {
        gap: 12,
    },  

    comment: {
        flexDirection: 'row',
        gap: 12,
        width: '100%',
    },

    userPhotoOfComment: {
        width: 36, 
        height: 36,
        borderRadius: 20
    },

    commentHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
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