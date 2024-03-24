import { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

import Button from "../../components/Button";

import { styles } from "./styles";
import Input from "../../components/Input";
import { THEME } from "../../styles/Theme";
import { useNavigation } from "@react-navigation/native";

import api from '../../../services/api';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [textError, setTextError] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const navigation = useNavigation()

    const handleSubmit = async () => {    
        setError('');

        email.trim() === '' ? 
            setErrorEmail(true) 
            : 
            setErrorEmail(false)
        
        
        password.trim() === '' ? 
            setErrorPassword(true) 
            :
            setErrorPassword(false)
        
        
        if (email.trim() != '' && password.trim() != '') {
            setErrorEmail(false)
            setErrorPassword(false)
            setTextError('');

            try {
                const response = await axios.post('http://localhost:4000/login',
                JSON.stringify({email, password}),
                {
                    headers: {'Content-Type': 'application/json'}
                });
    
                setUser(response.data);
    
                navigation.navigate('Slogan');

            } catch (error) {
                if(!error?.response) {
                    setError('Erro ao acessar a página');
                
                }else if(error.response?.status === 401) {
                    setError('Usuário e/ou senha inválidos');
                }
            }

        } else {
            setTextError('Insira todos os campos!')
        }

        useEffect(() => {
            api.get('Login').then(({data}) => {
                setEmail(data.email);
            })
        })
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
                <Text style={[THEME.text, styles.textError]}>{error}</Text>
                
                <TouchableOpacity
                    activeOpacity={0.8}
                >
                    <Text style={[THEME.link, styles.resetPassword]}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.access}>
                <Button 
                    type='submit'
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