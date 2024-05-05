import { TouchableOpacity, Text, ActivityIndicator } from "react-native"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"

function ButtonWithIcon({ children, isLoading = false, ...rest }) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={isLoading}
            style={styles.button}
            {...rest}
        >
            { 
                isLoading ? (
                    <ActivityIndicator color={THEME.colors.brownDark} />
                ) : (
                    children
                ) 
            }
        </TouchableOpacity>
    )
}

function Field({ title }) {
    return (
        <Text 
            style={[
                THEME.fonts.h2.bold,
                styles.buttonText
            ]}>
            {title}
        </Text>
    )
}

ButtonWithIcon.Field = Field

export { ButtonWithIcon }
