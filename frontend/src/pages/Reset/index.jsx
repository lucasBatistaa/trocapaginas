import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import { styles } from './styles.jsx';
import Input from '../../components/Forms/Input';
import ConfirmationCode from './confirmationCode.jsx';
import SimpleButton from '../../components/Button/SimpleButton';

import IsFormEmpty from '../../utils/isFormEmpty.jsx';
import isEmail from '../../utils/isEmail.jsx';
import { THEME } from '../../styles/Theme.jsx';

export default function Reset (){
    const [email, setEmail] = useState ("")
    const [errorEmail, setErrorEmail] = useState(false)
    const [messageError, setMessageError] = useState('')
    const [nextPage, setNextPage] = useState(false)

    const navigation = useNavigation()

    const validateForm = () => {
        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)
    
        if (!isEmptyEmail) {

            if (isEmail(email)){
                setMessageError('')
                return true
            }
            else { 
                setMessageError('E-mail incorreto')
                setErrorEmail(true)
            }
        } else {
            setMessageError('O campo precisa ser preenchido')
            setErrorEmail(true)
        }

        return false
    }

    const handleNextScreen = async () => {
        if (validateForm()) {
            try {
                const response = await axios.post('https://trocapaginas-server-production.up.railway.app/esqueciMinhaSenha',
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
    }

    return (
        <View style={styles.container}>
            
            {!nextPage ? 
                <View style={styles.containerEmailPage}>
                    <Text style={[THEME.fonts.h1.bold, THEME.colors.black, styles.text]}> ALTERAR SENHA </Text>

                    <View style={styles.alert}>
                        <Ionicons name="alert-circle-outline" size={32} color={THEME.colors.brownMedium}/>
                        <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownMedium}]}>Insira no campo abaixo o email utilizado no seu cadastro!</Text>
                    </View>
        
                    <Input
                        label={'Email'}
                        placeholder={'Insira seu email'}
                        value={email}
                        onChangeText={setEmail}
                        style={errorEmail && THEME.errors.input}
                    />

                    {messageError && <Text style={[THEME.fonts.text, THEME.errors.message]}>{messageError}</Text>}

                    <View style={[THEME.structure.viewButton, styles.buttonStyle]}>
                        <SimpleButton 
                            type='submit'
                            onPress={handleNextScreen}
                            title={"AVANÇAR"}
                            color={'brownDark'} 
                        />
                    </View>
                    
                </View>
            
                : 
                
                <ConfirmationCode/>
            }
            
        </View>
    )
}