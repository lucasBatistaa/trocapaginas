import { View, Text } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { useEffect } from "react";

import InputCode from "../../components/Forms/InputCode";
import SimpleButton from "../../components/Button/SimpleButton";
import { styles } from "./styles";

import { THEME } from "../../styles/Theme";

export default function ConfirmationCode () {
    const [nextPage, setNextPage] = useState(false)
    const [messageError, setMessageError] = useState('')
    const[codeValid, setCodeValid] = useState(false)
    const[code, setCode] = useState('');

    const navigation = useNavigation()

    const validateCode = async (confirmationCode) => {
        setCode(confirmationCode);

        if(confirmationCode.length != 4) {
            setMessageError('Por favor, preencha todos os dígitos');
        
        }else {
            setCodeValid(true);
            setMessageError('');
        }
    }

    const handleNextScreen = async() => {

        if(code.length === 0) {
            setMessageError('Por favor, preencha todos os dígitos');
        
        }else if(codeValid) {
            try {

                const response = await axios.get('https://trocapaginas-server.onrender.com/getCode', {
                    params: {
                        confirmationCode: code
                    }
                });

                setNextPage(true);

            }catch(error) {
                if(!error?.response) {
                    setMessageError('Erro ao acessar a página');
                
                }else if(error.response?.status === 401) {
                    setMessageError('Código inválido, tente novamente');
                }
            }
        }
    }

    const handleSubmitReset = async (password) => {
        try{
            const response = await axios.post('https://trocapaginas-server.onrender.com/alterar-senha',
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

            {!nextPage ?
                <View style={styles.containerCodePage}>

                <Text style={[THEME.fonts.h1.bold, THEME.colors.black, styles.text, {marginLeft: 28}]}> CÓDIGO DE VALIDAÇÃO</Text>
                   
                    <View style={styles.alert}>
                        <Ionicons name="alert-circle-outline" size={32} color={THEME.colors.brownMedium}/>
                        <Text style={[THEME.fonts.text, {color: THEME.colors.brownMedium}]}>Enviaremos um código para o seu e-mail em um minuto! Verifique sua caixa de entrada (ou spam) e digite abaixo os números informados.</Text>
                    </View>
    
                    <InputCode
                        onSubmit={validateCode}
                    />

                    {messageError && <Text style={[THEME.fonts.text, THEME.errors.message]}>{messageError}</Text>}

                    <View style={{marginTop: 138}}>

                        <SimpleButton
                            title={"CONFIRMAR"}
                            color={'brownDark'}
                            onPress={handleNextScreen}
                        />
                    </View>

                </View>

                :
                <CreatePassword 
                    buttonText={"ALTERAR"}
                    h1={"ALTERAR A SUA SENHA"}
                    onSubmit={handleSubmitReset}
                />

            }
            
        </View>
    )
}