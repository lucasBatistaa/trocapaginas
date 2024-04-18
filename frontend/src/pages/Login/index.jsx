import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import api from '../../services/api';
import IsFormEmpty from "../../utils/isFormEmpty";

import SimpleButton from "../../components/Button/SimpleButton";
import ButtonWithIcon from "../../components/Button/ButtonWithIcon";
import Input from "../../components/Forms/Input";
import Links from "../../components/Links";

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

    const[accessToken, setAccessToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    /*const [request, response, promptAsync] = Google.useAuthRequest({ 
        webClientId: "466281999410-6mfko1jtgpipohep6pom97hhei34sbee.apps.googleusercontent.com",
        anddroidClientId: "466281999410-hg5ni2eu171nct92kh4uai40rcmf2dr3.apps.googleusercontent.com"
    });*/

    const GoogleLogin = async () => {
        await GoogleSignIn.hasPlayServices();
        //const userInfo = await GoogleSignin.signIn();
        //return userInfo;
    };

    async function fetchUserInfo() {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { 
                Authorization: `Bearer ${accessToken}` 
            }
        });
        let userInfo = await response.json();
        setUser(userInfo);
    }

    const handlePress = async () => {
        await promptAsync();
    }

    const handleSubmit = async () => {    

        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)

        const isEmptyPassword =  IsFormEmpty(password)
        setErrorPassword(isEmptyPassword)
        
        if (!isEmptyEmail && !isEmptyPassword) {
            setMessageError('')

            try {
                const response = await axios.post('http://192.168.1.64:3000/login',
                JSON.stringify({email, password}),
                {
                    headers: {'Content-Type': 'application/json'}
                });
        
                navigation.navigate('Slogan');

            } catch (error) {
                if (!error?.response) {
                    setMessageError('Erro ao acessar a página');
                
                } else if (error.response?.status === 401) {
                    setMessageError('Email e/ou senha incorreto(s)!');
                }
            }

        } else {
            setMessageError('Insira todos os campos!')
        }

    } 

    /*const GoogleAuth = async () => {
        try {
            axios.get('http://localhost:3000/auth/google/callback').then(() => {
                console.log('a');
            })
    
            navigation.navigate('Slogan');

        } catch (error) {
            if (!error?.response) {
                setMessageError('Erro ao acessar a página');
            
            } else if (error.response?.status === 401) {
                setMessageError('Email e/ou senha incorreto(s)!');
            }
        }
    }*/
    const GoogleAuth = async () => {
        try {
            //fetch('http:localhost:3000/auth/google/callback').then(res => console.log(res));
            const url = 'http://localhost:3000/auth/google';
            
            const {data} = await axios.get(url, {withCredentials: false});
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={THEME.structure.container}>
            <Text style={THEME.fonts.h1.bold}>LOGIN</Text>
            
            <View style={THEME.structure.viewForm}>
                <ButtonWithIcon
                    title={'Continuar com Google'}
                    onPress={GoogleAuth}
                />
                
                <Text style={[THEME.fonts.text, {textAlign: 'center'}]}> ou </Text>

                <Input 
                    label={"Email"}
                    placeholder={"Insira seu email"}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    style={errorEmail && THEME.errors.input}
                />

                <Input 
                    label={"Senha"}
                    placeholder={"Insira sua senha"}
                    value={password}
                    onChangeText={setPassword}
                    style={errorPassword && THEME.errors.input}
                    secureTextEntry
                />

                {messageError && <Text style={[THEME.fonts.text, THEME.errors.message]}>{messageError}</Text>}
                
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Reset')}
                >
                    <Text style={[THEME.fonts.link, styles.resetPassword]}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={THEME.structure.viewButton}>
                <SimpleButton 
                    onPress={handleSubmit}
                    title='ACESSAR'
                    color={'brownDark'}         
                />

                <Links 
                    text={"Não possui conta?"}
                    title={"Criar conta"}
                    screen={"Register"}
                />
            
            </View>
        </View>
    )
}