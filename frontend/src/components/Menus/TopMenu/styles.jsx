import { StyleSheet, StatusBar } from "react-native";

import { THEME } from "../../../styles/Theme"
 
export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        borderBottomColor: 'rgba(207, 177, 140, 0.3)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    photo: {
        width: 40, 
        height: 40, 
        borderRadius: 20
    },

    textInput: {
        width: 210,
        fontSize: 14,
        paddingLeft: 14,
        backgroundColor: THEME.colors.brownLight,
        borderRadius: 50,
        paddingVertical: 4,
        marginTop: 24,
    },

    icon: {
        position: 'relative',
        top: -26,
        left: 172,
    }
})