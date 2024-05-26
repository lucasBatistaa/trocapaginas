import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { Input } from '../../Input'
import Button from '../../Button'

import { THEME } from '../../../styles/Theme'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

import validatePassword  from "../../../utils/validatePassword"

export default CreatePassword = ({ titleButton, onSubmit, isLoading=false }) => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [messageError, setMessageError] = useState('')

    const [securePassword, setSecurePassword] = useState(true)
    const [secureConfirmPassword, setSecureConfirmPassword] = useState(true)

    const requirements = {
        minimum: { regex: /^.{8,}$/, message: 'Pelo menos oito caracteres' },
        hasNumber: { regex: /(?=.*\d)/, message: 'Pelo menos um número' },
        hasLetterCase: { regex: /^(?=.*[a-z])(?=.*[A-Z]).+$/, message: 'Letras maiúsculas e minúsculas' },
        hasSimbol: { regex: /\W|_/, message: 'Pelo menos um símbolo especial (Ex.: @ # $ ! *)' }
    }

    const validateForm = () => {
        if (password.trim()) {
            if (validatePassword(password)){    
                if (password === confirmPassword) {
                    setMessageError("") 

                    return true
                } else {
                    setMessageError("As senhas não conferem")
                    setConfirmPasswordError(true)
                }
            } else {
                setMessageError("A senha deve atender todos os requisitos!")
                setPasswordError(true)
            }
        } else {
            setMessageError("insira todos os campos!")
        }

        password.trim() ? setPasswordError(false) : setPasswordError(true)
        confirmPassword.trim() ? setConfirmPasswordError(false) : setConfirmPasswordError(true)

        return false
    }

    const handleSubmit = () => {
        if (validateForm()) {
            // Função passada na página que chamou o componente
            // Retorna a senha informada
            onSubmit(password)
        }
    }        

    return (
        <View
            style={styles.container}
        >
            <Text 
                style={[
                    THEME.fonts.text,
                    styles.label
                ]}
            >
                Email
            </Text>
            <Input error={passwordError}>
                <Input.Field 
                    placeholder={"Insira sua senha"}
                    onChangeText={setPassword}
                    secureTextEntry={securePassword}
                />

                { 
                    securePassword ? 
                        <Ionicons 
                            name='eye-off' 
                            size={20} 
                            color={THEME.colors.brownDark}
                            onPress={() => setSecurePassword(false)}
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

            {/* para cada chave do objeto requirements, testar a regex e exebir a mensagem do requisito */}
            <View style={styles.requirementsContainer}>
                {
                    Object.keys(requirements).map((label) => (
                        <View
                            key={label}
                            style={styles.requirementAlert}
                        >
                            {
                                requirements[label].regex.test(password) ? (
                                    <Ionicons 
                                        name="checkmark-circle-outline" 
                                        size={20} 
                                        color={THEME.colors.green} />
                                ) : (
                                    <Ionicons 
                                        name="close-circle-outline" 
                                        size={20} 
                                        color={THEME.colors.red} />
                                )
                            }

                            <Text>{requirements[label].message}</Text>
                        </View>
                    ))
                }
            </View>
        
            <Text 
                style={[
                    THEME.fonts.text,
                    styles.label
                ]}
            >
                Email
            </Text>
            <Input error={confirmPasswordError}>
                <Input.Field 
                    placeholder={"Confirme sua senha"}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={secureConfirmPassword}
                />

                { 
                    secureConfirmPassword ? 
                        <Ionicons 
                            name='eye-off' 
                            size={20} 
                            color={THEME.colors.brownDark}
                            onPress={() => setSecureConfirmPassword(false)}
                        /> 
                    :
                        <Ionicons 
                            name='eye' 
                            size={20} 
                            color={THEME.colors.brownDark}
                            onPress={() => setSecureConfirmPassword(true)}
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

            <View style={styles.viewButton}>
                <Button
                    title={titleButton}
                    onPress={handleSubmit}
                    isLoading={isLoading}
                    color="brownDark"
                />
            </View>
        </View>
    );
}