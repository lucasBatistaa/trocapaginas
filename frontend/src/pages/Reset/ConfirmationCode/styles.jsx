import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/Theme";

export const styles = StyleSheet.create({
    viewSelectCode: {
        flex: 1,
        marginTop: 88,
        justifyContent: 'space-betweeen'
    },

    viewMessageAlert: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        gap: 8,
        marginBottom: 64,
    },

    textMessageAlert: {
        color: THEME.colors.brownMedium
    },

    viewButton: {
        marginTop: 140,
        alignSelf: 'center'
    }
})