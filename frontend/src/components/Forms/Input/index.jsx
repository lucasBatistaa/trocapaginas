import { useState } from "react"

import {View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";

export default function Input(props) {
    const [ secure, setSecure ] = useState(props.secureTextEntry)
    
    return (
        <View style={styles.container}>
            {props.label && <Text style={styles.label}>{props.label}</Text>}

            <TextInput
                {...props}

                style={[styles.input, props.style]}
                underlineColorAndroid='transparent'
                placeholderTextColor={'#8B8B8B'}    
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
        </View>
    )
}