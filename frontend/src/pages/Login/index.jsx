import { useEffect, useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"

import * as WebBrowser from 'expo-web-browser'
import axios from "axios"
import { useNavigation } from "@react-navigation/native"


import Button from "../../components/Button"
import { ButtonWithIcon } from "../../components/ButtonWithIcon"
import { Input } from '../../components/Input'
import Links from "../../components/Links"
import WaitMessage from "../../components/WaitMessage"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"

import GoogleLogo from "../../assets/googleLogo.svg"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useUserStore } from '../../store/badgeStore'
import AsyncStorage from "@react-native-async-storage/async-storage"
import InitialPage from "../InitialPage"
import Slogan from "../Slogan"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [messageError, setMessageError] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [securePassword, setSecurePassword] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)

    const user = useUserStore(state => state.save)
    const navigation = useNavigation()

    const handleGoogleLogin =  async () => {
        try {
            await WebBrowser.openBrowserAsync('https://trocapaginas-server-production.up.railway.app/auth/google/callback', '_self');

            setModalVisible(true)

            setTimeout(() => {
                navigation.navigate('InitialPage')
                setModalVisible(false);
            }, 18000)


        } catch(error) {

            setModalVisible(false)
            console.log(error)
        }
    }

    const handleSubmitLogin = async () => {    
        setIsLoading(true)

        if (email.trim() && password.trim()) {
            try {
                const response = await axios.post('https://trocapaginas-server-production.up.railway.app/login',
                JSON.stringify({email, password}),
                {
                    headers: {'Content-Type': 'application/json'}
                });

                user(response.data);
        
                navigation.navigate('InitialPage');

            } catch (error) {
                console.log(error)
                if (!error?.response) {
                    setMessageError('Erro ao acessar a página');
                
                } else if (error.response?.status === 401) {
                    setErrorEmail(true)
                    setErrorPassword(true)
                    setMessageError('Email e/ou senha incorreto(s)!');
                }
            }

        } else {
            email.trim() ? setErrorEmail(false) : setErrorEmail(true)
            password.trim() ? setErrorPassword(false) : setErrorPassword(true)

            setMessageError('Insira todos os campos!')
        }

        setIsLoading(false)
    } 
        
    return (
        <View style={styles.container}>
            <Text style={THEME.fonts.h1.bold}>
                LOGIN
            </Text>

            <View>
                <ButtonWithIcon
                    onPress={handleGoogleLogin}
                >
                    <GoogleLogo height={24} width={24} />
                    <ButtonWithIcon.Field 
                        title={'Continuar com Google'}
                    />
                </ButtonWithIcon>

                <Text style={[
                    THEME.fonts.text, 
                    styles.textCentralized
                    ]}
                > 
                    ou 
                </Text>


                <Text 
                    style={[
                        THEME.fonts.text,
                        styles.label
                    ]}
                >
                    Email
                </Text>
                <Input error={errorEmail}>
                    <Input.Field 
                        placeholder={"Insira seu email"}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        testID="input-email"
                    />
                </Input>

                <Text 
                    style={[
                        THEME.fonts.text,
                        styles.label
                    ]}
                >
                    Senha
                </Text>
                <Input error={errorPassword}>
                    <Input.Field 
                        placeholder={"Insira sua senha"}
                        onChangeText={setPassword}
                        secureTextEntry={securePassword}
                        testID="input-password"
                    />

                    { 
                        securePassword ? 
                            <Ionicons 
                                name='eye-off' 
                                size={20} 
                                color={THEME.colors.brownDark}
                                onPress={() => setSecurePassword(false)}
                                testID="visible-password"
                            /> 
                        :
                            <Ionicons 
                                name='eye' 
                                size={20} 
                                color={THEME.colors.brownDark}
                                onPress={() => setSecurePassword(true)}
                            />
                    }
                </Input>

                {
                    messageError && 
                    
                    <Text style={[
                            THEME.fonts.text, 
                            THEME.errors.message
                        ]}
                    >
                        {messageError}
                    </Text>
                }
                
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Reset')}
                    testID="forgotPassword-button"
                >
                    <Text style={[
                            THEME.fonts.link, 
                            styles.resetPassword
                        ]}
                    >
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>

                <View style={styles.viewButton}>
                    <Button 
                        onPress={handleSubmitLogin}
                        title='ACESSAR'
                        isLoading={isLoading}
                        color={'brownDark'}    
                        testID="access-button"     
                    />
                </View>
            </View>

            <Links 
                text={"Não possui conta? "}
                title={"Criar conta"}
                screen={"Register"}
            /> 

            <WaitMessage modalVisible={modalVisible}/>
        </View>
    )
}