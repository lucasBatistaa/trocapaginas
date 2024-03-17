import { TouchableOpacity, Text, StyleSheet } from "react-native"

import { styles } from "./styles"

export default function Button ({ title, color }) {
    return (
        <TouchableOpacity 
            style={[styles.button, styles[color]]}
            activeOpacity={0.9}    
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}