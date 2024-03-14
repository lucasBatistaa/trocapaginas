import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import {  useFonts, EBGaramond_400Regular } from '@expo-google-fonts/eb-garamond';

export default function Slogan () {
    return (
        <View style={styles.container}>
            <Image
                source={require(`../../assets/logo.png`)}
                style={styles.logo}
            />
            <Text style={styles.slogan}>
                Junte-se a uma incrível troca de experiências literárias e imaginativas no <Text style={styles.span}>Troca Páginas!</Text>
            </Text>

            <View style={styles.viewButtons}>
                <TouchableOpacity style={[styles.button, styles.brown]}>
                    <Text style={styles.buttonText}>REGISTRE-SE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center', 
        paddingTop: 60,
        backgroundColor: '#F2F2F2'
    },

    logo: {
        width: 200,
        height: 200,
    },
    
    slogan: {
        color: '#0A080D',
        marginHorizontal: 28,
        marginVertical: 24,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "EBGaramond_400Regular",
    },
    
    span: {
        color: '#59372A'
    },

    brown: {
        backgroundColor: '#59372A'
    },

    viewButtons: {
        marginTop: 70,
        display: 'flex',
        gap: 12,
    },

    button: {
        backgroundColor: "#826059",
        borderRadius: 12,
        width: 200,
        paddingVertical: 12,
    },
    
    buttonText: {
        fontSize: 20,
        color: '#F2F2F2',
        fontWeight: 'bold',
        textAlign: 'center'
    },

})

