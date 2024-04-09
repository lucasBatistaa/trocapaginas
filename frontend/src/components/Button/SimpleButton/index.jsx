import { TouchableOpacity, Text, StyleSheet } from "react-native"

import { styles } from "./styles"

export default function SimpleButton (props) {
    return (
        <TouchableOpacity 
            {...props}   
            style={[styles.button, styles[props.color]]}
            activeOpacity={0.9}       
                 
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}