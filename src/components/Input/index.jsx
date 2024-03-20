import { useState } from "react"

import { View, TextInput, Text, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";

export default function Input(props) {
    const [ secure, setSecure ] = useState(props.secureTextEntry)
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>

            <TextInput
                style={styles.input}
                
                underlineColorAndroid='transparent'
                placeholderTextColor={'#8B8B8B'}    
                {...props}
                secureTextEntry={secure}
            />

            {props.secureTextEntry && 
                <TouchableOpacity 
                    style={styles.icon}
                    onPress={() => setSecure(!secure)}
                >
                    <Ionicons name={secure ? "eye" : "eye-off" } size={20} color={'#59372A'} />
                </TouchableOpacity>
            }
            

            {/* {
                showPassword ?
                    <Ionicons name="eye" size={20} color={'#59372A'} onPress={handleShowPassword} />
                    :
                    <Ionicons name="eye-off" size={20} color={'#59372A'} onPress={handleShowPassword} />
            } */}
        </View>
    )
}