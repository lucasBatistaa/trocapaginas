import { TouchableOpacity, Text, ActivityIndicator } from "react-native"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"

export default function Button({ title, color = 'brownDark', isLoading = false, ...rest }) {
    return (
        <TouchableOpacity 
            disabled={isLoading}
            style={styles.button(color)}
            activeOpacity={0.9}       
            {...rest}   
        >
            { 
                isLoading ? (
                    <ActivityIndicator color={THEME.colors.white} />
                )
                : (
                    <Text 
                        style={[
                            THEME.fonts.h2.bold, 
                            styles.buttonText
                        ]}
                    > 
                        {title}
                    </Text>
                )
            }
        </TouchableOpacity>
    )
}