import { View, Text } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import InputCode from "../../components/Forms/InputCode";
import SimpleButton from "../../components/Button/SimpleButton";
import { styles } from "./styles";

import { THEME } from "../../styles/Theme";

export default function ConfirmationCode () {
    const [nextPage, setNextPage] = useState(false)
    const [messageError, setMessageError] = useState('')
    let message;

    let isCodeValid = false;

    const navigation = useNavigation()

    const validateCode = (confirmationCode) => {
        const code = confirmationCode.split('')

        if (code.length == 4){
            //conexao com o banco
            isCodeValid = true
        }
        else message = 'Por favor, preencha todos os campos.'
    }

    const handleNextScreen = () => {
        isCodeValid ? setNextPage(true) : setMessageError(message)
    }

    const handleSubmitReset = async (password) => {
        try{
            const response = await axios.post('http://192.168.1.64:3000/alterar-senha',
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
                        <Text style={[THEME.fonts.text, {color: THEME.colors.brownMedium}]}>Enviamos um código para o seu e-mail. Verifique sua caixa de entrada (ou spam) e digite abaixo os números informados.</Text>
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
                    h1={"ALTERAR SENHA"}
                    //onSubmit={handleSubmitReset}
                />
               

            }
            
        </View>
    )
}