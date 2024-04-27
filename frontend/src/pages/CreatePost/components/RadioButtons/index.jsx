import { TouchableOpacity, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./style"
import { THEME } from "../../../../styles/Theme";

export function RadioButtons({label, isSelectedPost, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.radioButton}
        >
            
        {isSelectedPost ? 
                <Ionicons name='radio-button-off-outline' size={24} color={THEME.colors.brownDark}/>
                : 
                <Ionicons name='radio-button-on-outline' size={24} color={THEME.colors.brownDark}/>}
            
            <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownDark}]}>{label}</Text>
        </TouchableOpacity>
    )
}