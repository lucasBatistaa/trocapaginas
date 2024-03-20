import { useState } from "react"

import { View, TextInput, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";

export default function Input({ placeholder, value, icon = '', secureTextEntry = false, label }) {
    const [ valueInput, setValueInput ] = useState(value)
    const [ showPassword, setShowPassword ] = useState(secureTextEntry)

    const handleShowPassword = () => {
        {showPassword ? setShowPassword(false) : setShowPassword(true)}
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
                placeholder={placeholder}
                value={valueInput}
                onChangeText={setValueInput}
                secureTextEntry={showPassword}
            />

            { icon && <Ionicons name="eye" size={20} color={'#59372A'} onPress={handleShowPassword} />}
            

            {/* {
                showPassword ?
                    <Ionicons name="eye" size={20} color={'#59372A'} onPress={handleShowPassword} />
                    :
                    <Ionicons name="eye-off" size={20} color={'#59372A'} onPress={handleShowPassword} />
            } */}
        </View>
    )
}