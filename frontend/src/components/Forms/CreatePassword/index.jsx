import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Input from '../Input'
import SimpleButton from '../../Button/SimpleButton';

import validatePassword  from "../../../utils/validatePassword";
import IsFormEmpty from "../../../utils/isFormEmpty";

import {THEME} from '../../../styles/Theme'
import { styles } from './styles'

export default CreatePassword = (props) => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [messageError, setMessageError] = useState('')

    const requirements = {
        minimum: { regex: /^.{8,}$/, message: 'Pelo menos oito caracteres' },
        hasNumber: { regex: /(?=.*\d)/, message: 'Pelo menos um número' },
        hasLetterCase: { regex: /^(?=.*[a-z])(?=.*[A-Z]).+$/, message: 'Letras maiúsculas e minúsculas' },
        hasSimbol: { regex: /\W|_/, message: 'Pelo menos um símbolo especial (Ex.: @ # $ ! *)' }
    }

    const validateForm = () => {
        const isEmptyPassword = IsFormEmpty(password) 
        setPasswordError(isEmptyPassword)
    
        const isEmptyConfirmPassword = IsFormEmpty(confirmPassword) 
        setConfirmPasswordError(isEmptyConfirmPassword)
    
        const validateData = validatePassword(password)
    
        if (validateData){
            if (!isEmptyPassword) {
                setMessageError("") 
                
                if (password === confirmPassword) {
                    return true
                } else {
                    setMessageError("As senhas não conferem")
                    setConfirmPasswordError(true)
                }
            } else setMessageError("insira todos os campos!")
        } else {
            setMessageError("A senha deve atender todos os requisitos!")
            setPasswordError(true)
        }

        return false
    }

    const handleSubmit = () => {
        if (validateForm()) {
            // Função passada na página que chamou o componente
            // Retorna a senha informada
            props.onSubmit(password)
        }
    }        

    return (
        <View>
            <Text style={[THEME.fonts.h1.bold, THEME.colors.black, styles.text]}>{props.h1}</Text>

            <Input
                label={"Senha"}
                placeholder={"Insira sua senha"}
                value={password}
                onChangeText={setPassword}
                style={passwordError && THEME.errors.input}
                secureTextEntry
            />

            {/*para cada chave do objeto requirements, testar a regex e exebir a mensagem do requisito*/}
            <View style={styles.requirementsContainer}>
                {Object.keys(requirements).map((label) => (
                    <View 
                        key={label}
                        style={styles.requirementAlert}
                    >
                        <View>
                            {requirements[label].regex.test(password) ? (
                                <Ionicons name="checkmark-circle-outline" size={20} color={"#196805"} />
                            ) : (
                                <Ionicons name="close-circle-outline" size={20} color={"#CE1F1F"} />
                            )}
                        </View>
                        <Text>{requirements[label].message}</Text>
                    </View>
                ))}
            </View>
        

            <Input
                label={"Confirme sua senha"}
                placeholder={"Confirme sua senha"}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={confirmPasswordError && THEME.errors.input}
                secureTextEntry
            />

            {messageError && <Text style={[THEME.fonts.text, THEME.errors.message]}>{messageError}</Text>}

            <View style={[THEME.structure.viewButton, styles.button]}>
                <SimpleButton
                    title={props.buttonText}
                    onPress={handleSubmit}
                    color="brownDark"
                />
            </View>
        </View>
    );
}