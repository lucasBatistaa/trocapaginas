import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import Button from "../../components/Button";

import { styles } from "./styles";
import Input from "../../components/Input";
import { THEME } from "../../styles/Theme";
import { useNavigation } from "@react-navigation/native";

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [textError, setTextError] = useState('')

    const navigation = useNavigation()

    const handleSubmit = () => {    
        {email.trim() === '' ? 
            setErrorEmail(true) 
            : 
            setErrorEmail(false)
        }
        
        {password.trim() === '' ? 
            setErrorPassword(true) 
            :
            setErrorPassword(false)
        }
        
        if (email.trim() != '' && password.trim() != '') {
            setErrorEmail(false)
            setErrorPassword(false)
            navigation.navigate('Slogan')
        } else {
            setTextError('Insira todos os campos!')
        }
    } 

    return (
        <View style={styles.container}>
            <Text style={THEME.h1}>LOGIN</Text>
            
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

                <Text style={[THEME.text, styles.textError]}>{textError}</Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                >
                    <Text style={[THEME.link, styles.resetPassword]}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.access}>
                <Button 
                    style={styles.button}
                    onPress={handleSubmit}
                    title='ACESSAR'
                    color={'brownDark'}         
                />

                <Text>
                    Não possui conta? <Text style={[THEME.link, {color: THEME.colors.brownMedium}]}>Criar conta</Text>
                </Text>
            </View>
        </View>
    )
}