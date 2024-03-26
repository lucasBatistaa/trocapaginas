import { TouchableOpacity, Text, StyleSheet } from "react-native"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"

export default function Button (props) {
    return (
        <TouchableOpacity 
            {...props}   
            style={[styles.button, {backgroundColor: props.color}]}
            activeOpacity={0.9}       
        >
            <Text 
                style={[THEME.fonts.textButton, styles.buttonText]}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}