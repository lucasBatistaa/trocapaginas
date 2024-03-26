import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { styles } from "./styles";
import { THEME } from "../../styles/Theme";

export default function Login ({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [textError, setTextError] = useState('')


    const validateDataForms = () => {
        if (email.trim() === '') {
            setErrorEmail(true)
        } else {
            setErrorEmail(false)
        }
       
        if (password.trim() === '') {
            setErrorPassword(true) 
        } else {
            setErrorPassword(false)
        }
    
        if (email.trim() != '' && password.trim() != '') {            
            return true
        }
    }

    const handleSubmit = () => {    
        if (validateDataForms()) {
            navigation.navigate('Slogan')
        } else {
            setTextError('Insira todos os campos!')
        }
    } 

    return (
        <View style={styles.container}>
            <Text style={THEME.fonts.h1}>LOGIN</Text>
            
            <View style={styles.formInput}>
                <Input 
                    label={"E-mail"}
                    placeholder={"Insira seu email"}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    style={errorEmail && styles.inputError}
                />

                <Input 
                    label={"Senha"}
                    placeholder={"Insira sua senha"}
                    value={password}
                    onChangeText={setPassword}
                    style={errorPassword && styles.inputError}
                    secureTextEntry
                />

                {
                    textError && 
                    <Text 
                      style={[THEME.fonts.text, styles.textError]}
                    >
                        {textError}
                    </Text>
                }

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Slogan')}
                >
                    <Text 
                        style={[THEME.fonts.link, styles.resetPassword]}
                    >
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.access}>
                <Button 
                    title='ACESSAR'
                    color={THEME.colors.brownDark}         
                    onPress={handleSubmit}
                />

                <Text>
                    Não possui conta?{' '}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Slogan')}
                    >
                    <Text 
                        style={[THEME.fonts.link, styles.resetPassword]}
                    >
                        Criar conta
                    </Text>
                </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}