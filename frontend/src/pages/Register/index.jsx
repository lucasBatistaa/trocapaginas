import { useState } from "react"
import { View, Text } from "react-native"

import { useNavigation } from "@react-navigation/native"

import * as WebBrowser from 'expo-web-browser'

import { ButtonWithIcon } from "../../components/ButtonWithIcon"
import Links from "../../components/Links"
import WaitMessage from "../../components/WaitMessage"

import { THEME } from '../../styles/Theme'
import { styles } from "./style"

import GoogleLogo from '../../assets/googleLogo.svg'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Register() {
    const[ modalVisible, setModalVisible ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    
    const navigation = useNavigation()

    const handleGoogleLogin = async () => {
        try {
            await WebBrowser.openBrowserAsync('https://trocapaginas-server-production.up.railway.app/auth/google', '_self');
        
            setIsLoading(true)
            setModalVisible(true)

            setTimeout(() => {
                navigation.navigate('InitialPage')
                setModalVisible(false)
            }, 18000);

        } catch(error) {
            console.log(error)

            setIsLoading(false)
            setModalVisible(false)
        } 

    }

    return (
        <View style={styles.container}>
            <Text style={THEME.fonts.h1.bold}>
                CADASTRO
            </Text>

            <View style={styles.viewButtons}>
                <ButtonWithIcon
                    onPress={handleGoogleLogin}
                    isLoading={isLoading}
                >
                    <GoogleLogo 
                        width={24} 
                        height={24} 
                    /> 
                    <ButtonWithIcon.Field 
                        title={'Continuar com Google'}
                    />
                </ButtonWithIcon>

                <ButtonWithIcon
                    onPress={() => navigation.navigate('RegisterWithEmail')}
                >
                    <Ionicons 
                        name="mail-outline" 
                        size={24}
                        color={THEME.colors.brownDark}
                    />
                    <ButtonWithIcon.Field 
                        title={'Registrar com Email'}
                    />
                </ButtonWithIcon>
            </View>

            <Links
                text={'Possui conta? '}
                title={'Realizar login'}
                screen={'Login'}
            />

            <WaitMessage modalVisible={modalVisible} />
        </View>
    )
}