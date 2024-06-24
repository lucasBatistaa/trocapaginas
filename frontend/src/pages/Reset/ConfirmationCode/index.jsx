import { useState } from "react"
import { View, Text } from "react-native"

import axios from 'axios'
import { useNavigation } from "@react-navigation/native"

import Button from "../../../components/Button"
import InputCode from "../../../components/Forms/InputCode"
import CreatePassword from "../../../components/Forms/CreatePassword"

import { styles } from "./styles"
import { THEME } from "../../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useUserStore } from "../../../store/badgeStore"

export default function ConfirmationCode () {
    const [nextPage, setNextPage] = useState(false)
    const [messageError, setMessageError] = useState('')
    const[codeValid, setCodeValid] = useState(false)
    const[code, setCode] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigation()

    const validateCode = async (confirmationCode) => {
        setCode(confirmationCode);

        if(confirmationCode.length != 4) {
            setMessageError('Por favor, preencha todos os dígitos')
        
        }else {
            setCodeValid(true)
            setMessageError('')
        }
    }

    const handleNextScreen = async() => {
        setIsLoading(true)

        if (codeValid) {
            try {
                await axios.get('https://trocapaginas-server.onrender.com/getCode', {
                    params: {
                        confirmationCode: code
                    }
                });

                setNextPage(true)
                setIsLoading(false)

            } catch(error) {
                setIsLoading(false)

                if(!error?.response) {
                    setMessageError('Erro ao acessar a página')
                
                }else if(error.response?.status === 401) {
                    setMessageError('Código inválido, tente novamente')
                }
            }
        }

        setIsLoading(false)
    }

    const handleSubmitReset = async (password) => {

        setIsLoading(true)

        try{
            await axios.post('https://trocapaginas-server.onrender.com/alterar-senha',
            JSON.stringify({password}),

            {
                headers: {'Content-Type': 'application/json'}
            })
            
            navigation.navigate('Login');
    
        } catch(error) {
            setIsLoading(false)

            if (!error?.response) {
                setMessageError('Erro ao acessar a página');
            
            }
        }
    }

    return (
        <>
            { 
                !nextPage ?
                <View style={styles.viewSelectCode}>                   
                    <View style={styles.viewMessageAlert}>
                        <Ionicons 
                            name="alert-circle-outline" 
                            size={32} 
                            color={THEME.colors.brownMedium}
                        />
                        <Text 
                            style={[
                                THEME.fonts.text, 
                                styles.textMessageAlert
                            ]}
                        >
                            Enviaremos um código para o seu e-mail em um minuto! Verifique sua caixa de entrada (ou spam) e digite abaixo os números informados.
                        </Text>
                    </View>
    
                    <InputCode onSubmit={validateCode} />

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

                    <View style={styles.viewButton}>
                        <Button
                            title={"CONFIRMAR"}
                            color={'brownDark'}
                            isLoading={isLoading}
                            onPress={handleNextScreen}
                        />
                    </View>
                </View>
                :
                <CreatePassword
                    titleButton={"ALTERAR"}
                    onSubmit={handleSubmitReset}
                    isLoading={isLoading}
                />
            }
        </>
    )
}