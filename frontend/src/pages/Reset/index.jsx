import { useState } from 'react'
import { View, Text } from 'react-native'

import { useNavigation } from "@react-navigation/native"
import axios from 'axios'

import Button from '../../components/Button'
import { Input } from '../../components/Input'

import isEmail from '../../utils/isEmail.jsx'

import { styles } from './styles.jsx'
import { THEME } from '../../styles/Theme.jsx'
import Ionicons from '@expo/vector-icons/Ionicons'
import ConfirmationCode from './ConfirmationCode/'

export default function Reset() {
    const [email, setEmail] = useState ("")

    const [errorEmail, setErrorEmail] = useState(false)
    const [messageError, setMessageError] = useState('')

    const [nextPage, setNextPage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigation()

    const validateForm = () => {
        if (email.trim()) {

            if (isEmail(email)){
                return true
            }
            else { 
                setErrorEmail(true)
                setMessageError('E-mail incorreto')
            }
        } else {
            setErrorEmail(true)
            setMessageError('O campo precisa ser preenchido')
        }

        return false
    }

    const handleNextScreen = async () => {

        setIsLoading(true)

        if (validateForm()) {
            try {
                await axios.post('https://trocapaginas-server.onrender.com/esqueciMinhaSenha',
                JSON.stringify({email}),
            
                {
                    headers: {'Content-Type': 'application/json'}
                }) 

                setNextPage(true)
                
            } catch (error) {
                if (!error?.response) {
                    setMessageError('Erro ao acessar a página');
                
                } else if (error.response?.status === 401) {
                    setMessageError('Email inexistente');
                    setNextPage(false)

                }
            }
        }

        setIsLoading(false)
    }

    return (
        <View style={styles.container}>
            <Text style={[
                    THEME.fonts.h1.bold, 
                ]}
            > 
                ALTERAR SENHA 
            </Text>

            {
                !nextPage ? 
                    <View style={styles.viewSelectEmail}>
                        <View style={styles.viewMessageAlert}>
                            <Ionicons 
                                name="alert-circle-outline" 
                                size={32} 
                                color={THEME.colors.brownMedium}
                            />
                            <Text 
                                style={[
                                    THEME.fonts.h1.normal,
                                    styles.textMessageAlert
                                ]}
                            >
                                Insira no campo abaixo o email utilizado no seu cadastro!
                            </Text>
                        </View>
            
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
                                placeholder={'Insira seu email'}
                                onChangeText={setEmail}
                            />
                        </Input>

                        {
                            messageError && 
                            <Text 
                                style={[
                                    THEME.fonts.text, 
                                    THEME.errors.message
                                ]}
                            >
                                {messageError}
                            </Text>
                        }

                        
                    </View>
                : 
                    <ConfirmationCode/>
            }

            {
                !nextPage && 
                
                <View style={styles.viewButton}>
                    <Button 
                        title={"AVANÇAR"}
                        color={'brownDark'} 
                        isLoading={isLoading}
                        onPress={handleNextScreen}
                    />
                </View>}
        </View>
    )
}