import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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

    const handleSubmit = () => {
        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)

        const validEmail = isEmail (email)
        
        if (!isEmptyEmail) {
            setMessageError('')

            if (validEmail){
                //verificar se o email existe
                //mandar email com o link da página
                setNextPage(true)
            }
            else setMessageError('E-mail incorreto')
        } else {
            setMessageError('O campo precisa ser preenchido')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[THEME.fonts.h1, THEME.colors.black]}> ALTERAR SENHA </Text>

            {!nextPage ? 
                <View style={styles.containerEmailPage}>
                    <View>
                        <Ionicons name="alert-circle-outline"/>
                        <Text>Insira no campo abaixo o email utilizado no seu cadastro!</Text>
                    </View>
        
                    <Input
                        label={'Email'}
                        placeholder={'Insira seu email'}
                        value={email}
                        onChangeText={setEmail}
                        style={errorEmail && THEME.errors.input}
                    />

                    {messageError && <Text style={[THEME.fonts.text, THEME.errors.message]}>{messageError}</Text>}

                    <SimpleButton 
                        type='submit'
                        onPress={handleSubmit}
                        title={"RECUPERAR"}
                        color={'brownDark'} 
                    />

                </View>
            
                : <CreatePassword buttonText={"ALTERAR"}/>
            }
            
        </View>
    )
}