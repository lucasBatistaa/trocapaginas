import { StyleSheet, StatusBar } from "react-native"
import { THEME } from "../../styles/Theme"

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 90,
        paddingHorizontal: 28,
        justifyContent: 'space-between'
    },
    
    viewMessageAlert: {
        marginBottom: 36,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        gap: 8
    },
    
    textMessageAlert: {
        color: THEME.colors.brownMedium
    },
    
    label: {
        marginBottom: 4,
    },

    viewButton: {
        // marginTop: 120,
        alignItems: 'center'
    },
})