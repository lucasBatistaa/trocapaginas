import { StyleSheet } from "react-native"
import { THEME } from "../../../styles/Theme"

export const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 14,
        marginTop: 40,
      },
      
      input: {
        width: 38,
        height: 38,
        borderWidth: 1,
        borderColor: THEME.colors.brownDark,
        borderRadius: 6,
        textAlign: 'center',
        fontSize: 16,
      },
})