import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

import { styles } from './styles.jsx';
import CreatePassword from '../../components/Forms/CreatePassword';
import Input from '../../components/Forms/Input';
import SimpleButton from '../../components/Button/SimpleButton';

import IsFormEmpty from '../../utils/isFormEmpty.jsx';
import isEmail from '../../utils/isEmail.jsx';
import { THEME } from '../../styles/Theme.jsx';
import { useNavigation } from "@react-navigation/native";

export default function Reset (){
    const [email, setEmail] = useState ("")
    const [errorEmail, setErrorEmail] = useState(false)
    const [messageError, setMessageError] = useState('')
    const [nextPage, setNextPage] = useState(false)
    const [password, setPassword] = useState ('')

    const navigation = useNavigation()

    const handleSubmit = async () => {
        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)

        const validEmail = isEmail (email)
        
        if (!isEmptyEmail) {
            setMessageError('')

            if (validEmail){
                //verificar se o email existe
                try {
                    const response = await axios.post('http://localhost:3000/esqueciMinhaSenha',
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
                //mandar email com o link da página
            }
            else { 
                setMessageError('E-mail incorreto')
                setErrorEmail(true)
            }
        } else {
            setMessageError('O campo precisa ser preenchido')
            setMessageError(true)
        }
    }

    const handleSubmitNewPassword = async () => {
        console.log(password)
        try{
            const response = await axios.post('http://localhost:3000/alterar-senha',
            JSON.stringify({password}),

            {
                headers: {'Content-Type': 'application/json'}
            })

            navigation.navigate('Login');

        }catch(error) {
            
            if (!error?.response) {
                setMessageError('Erro ao acessar a página');
            
            } else if (error.response?.status === 401) {
                setMessageError('Email inexistente');
                setNextPage(false)

            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[THEME.fonts.h1.bold, THEME.colors.black]}> ALTERAR SENHA </Text>

            {!nextPage ? 
                <View style={styles.containerEmailPage}>
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

                    <View style={styles.buttonStyle}>
                        <SimpleButton 
                            type='submit'
                            onPress={handleSubmit}
                            title={"RECUPERAR"}
                            color={'brownDark'} 
                        />
                    </View>
                    
                </View>
            
                : 
                <View style={styles.componentContainer}> 
                    <CreatePassword buttonText={"ALTERAR"}/>
                </View>
            }
            
        </View>
    )
}