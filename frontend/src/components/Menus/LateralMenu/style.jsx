import { StyleSheet } from "react-native"

import { THEME } from "../../../styles/Theme"

export const styles = StyleSheet.create ({
    principalView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',    
        flexDirection: 'row'
    },

    clickClose: {
        flex: 1
    },

    menuContainer: {
        backgroundColor: THEME.colors.white,
        width: 180, 
    },

    viewOption: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 15,
        alignItems: 'center'    
    }
})