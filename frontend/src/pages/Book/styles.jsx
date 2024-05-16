import { StyleSheet } from "react-native";
import { THEME } from "../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    iconGoBack: {
        marginTop: 12,
        marginBottom: 8,
        marginLeft: 20,
    },

    bookOverview: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingBottom: 20,
        gap: 28,
    },

    imageBook: {
        flex: 1,
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 4,
    },

    resumeAndActions: {
        justifyContent: 'space-between',
    },
    
    nameAuthor: {
        color: THEME.colors.brownDark,
        marginBottom: 20,
    },

    avaliation: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    starsAvaliation: {
        flexDirection: 'row',
    },

    synopsisAndComment: {
        flexDirection: 'row',
        gap: 12,
        
    },

    actions: {
        marginTop: 8,
        color: THEME.colors.brownMedium,
        borderBottomWidth: 1,
        borderBottomColor: THEME.colors.brownMedium
    },

    tabView: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    tabButton: (active) => ({
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: active ? THEME.colors.brownDark : THEME.colors.brownLight
    }),

    tabTitle: (active) => ({
        color: active ? THEME.colors.white : THEME.colors.brownDark,
    }),

    viewContentOfTab: {
        padding: 20,
        gap: 12,
    },
})