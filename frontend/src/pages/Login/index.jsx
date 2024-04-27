import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Modal, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import api from '../../services/api';
import IsFormEmpty from "../../utils/isFormEmpty";
import * as WebBrowser from 'expo-web-browser';
import { Linking } from "react-native";

import SimpleButton from "../../components/Button/SimpleButton";
import ButtonWithIcon from "../../components/Button/ButtonWithIcon";
import Input from "../../components/Forms/Input";
import Links from "../../components/Links";

import { styles } from "./styles";
import { THEME } from "../../styles/Theme";

export default function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [user, setUser] = useState(false);
    const[modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const GoogleLogin =  async () => {
        //window.open('http://localhost:6005/auth/google', '_self');
        try {

            WebBrowser.openBrowserAsync('https://trocapaginas-server-production.up.railway.app/auth/google/callback', '_self');

            setModalVisible(true);
            //await axios.get('https://trocapaginas-server-production.up.railway.app/auth/google')
            
            //setUser(true);

            /*await fetch('https:trocapaginas-server-production.up.railway.app/auth/google', {mode: 'no-cors', headers: {
                'Content-Type': 'text/html, charset=utf-8', 'Cache-Control': 'max-age=3600, must-revalidate'
            }})*/

            //fetch('https://trocapaginas-server-production.up.railway.app/auth/google')

            /*const response = await axios.get('/auth/google', {
                withCredentials: true
            });*/

            setTimeout(() => {
                navigation.navigate('CreatePost');
                setModalVisible(false);
            }, 15000);


        }catch(error) {
            console.log(error);
        }

    };

    const handleSubmit = async () => {    

        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)

        const isEmptyPassword =  IsFormEmpty(password)
        setErrorPassword(isEmptyPassword)
        
        if (!isEmptyEmail && !isEmptyPassword) {
            setMessageError('')

            try {
                const response = await axios.post('http://localhost:6005/login',
                JSON.stringify({email, password}),
                {
                    headers: {'Content-Type': 'application/json'}
                });
        
                navigation.navigate('CreatePost', {
                    user: response.data
                });

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

    return (
        <View style={[THEME.structure.container, modalVisible ? {opacity: 0.5 } : '']}>
            <Text style={THEME.fonts.h1.bold}>LOGIN</Text>

            <View style={THEME.structure.viewForm}>
                <ButtonWithIcon
                    title={'Continuar com Google'}
                    onPress={GoogleLogin}
                />

                {user && navigation.navigate('CreatePost')}

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

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={THEME.structure.modalContainer}>
                    <View style={THEME.structure.modalContent}>
                        <Text style={[THEME.fonts.h1.bold, {textAlign: 'center'}]}>Aguarde enquanto processamos suas informações...</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}