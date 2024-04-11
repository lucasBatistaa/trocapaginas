import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


import { styles } from './styles.jsx';
import CreatePassword from '../../components/Forms/CreatePassword';
import Input from '../../components/Forms/Input';
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

                //verificar se o email existe
                //mandar email com o link da página

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
                const response = await axios.post('http://192.168.1.65:3000/esqueciMinhaSenha',
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

    const handleSubmitReset = async (password) => {
        try{
            const response = await axios.post('http://192.168.1.65:3000/alterar-senha',
            JSON.stringify({password}),

            {
                headers: {'Content-Type': 'application/json'}
            })
            
            navigation.navigate('Login');
    
        }catch(error) {
            
            if (!error?.response) {
                setMessageError('Erro ao acessar a página');
            
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

                    <View style={THEME.structure.viewButton}>
                        <SimpleButton 
                            type='submit'
                            onPress={handleNextScreen}
                            title={"RECUPERAR"}
                            color={'brownDark'} 
                        />
                    </View>
                    
                </View>
            
                : 
                <View style={styles.componentContainer}> 
                    <CreatePassword 
                        buttonText={"ALTERAR"}
                        onSubmit={handleSubmitReset}
                    />
                </View>
            }
            
        </View>
    )
}