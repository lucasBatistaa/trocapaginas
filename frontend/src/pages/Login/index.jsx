import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import api from '../../services/api';
import IsFormEmpty from "../../utils/isFormEmpty";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { styles } from "./styles";
import { THEME } from "../../styles/Theme";

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [user, setUser] = useState(null);

    const navigation = useNavigation()
    
    // useEffect(() => {
    //     api.get('Login').then(({data}) => {
    //         setEmail(data.email);
    //     })
    // })

    const handleSubmit = async () => {    

        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)

        const isEmptyPassword =  IsFormEmpty(password)
        setErrorPassword(isEmptyPassword)
        
        if (!isEmptyEmail && !isEmptyPassword) {
            setMessageError('')

            console.log('ENTROU', errorEmail, errorPassword)
            try {
                const response = await axios.post('http://localhost:4000/login',
                JSON.stringify({email, password}),
                {
                    headers: {'Content-Type': 'application/json'}
                });
    
                setUser(response.data);
    
                navigation.navigate('Slogan');

            } catch (error) {
                if (!error?.response) {
                    setMessageError('Erro ao acessar a página');
                
                } else if (error.response?.status === 401) {
                    setMessageError('Usuário e/ou senha inválidos');
                }
            }

        } else {
            setMessageError('Insira todos os campos!')
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

                {messageError && <Text style={[THEME.fonts.text, styles.messageError]}>{messageError}</Text>}
                
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Reset')}
                >
                    <Text style={[THEME.fonts.link, styles.resetPassword]}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.access}>
                <Button 
                    onPress={handleSubmit}
                    title='ACESSAR'
                    color={'brownDark'}         
                />

                <Text>
                    Não possui conta? 
                    <Text 
                        onPress={() => navigation.navigate('Register')} 
                        style={[
                            THEME.fonts.link, 
                            {color: THEME.colors.brownMedium}
                        ]}> Criar conta</Text>
                </Text>
            </View>
        </View>
    )
}