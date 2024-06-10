import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import IsFormEmpty from "../../../utils/isFormEmpty";

import Input from "../../../components/Forms/Input";
import SimpleButton from "../../../components/Button/SimpleButton";
import CreatePassword from "../../../components/Forms/CreatePassword";
import Links from "../../../components/Links";

import { THEME } from "../../../styles/Theme";
import { styles } from "./styles";

export default function RegisterEmail(props) {
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ errorEmail, setErrorEmail ] = useState(false)
    const [ errorUsername, setErrorUsername ] = useState(false)
    const [ messageError, setMessageError ] = useState('')
    const [ nextPage, setNextPage ] = useState(false)
    const [ photo, setPhoto] = useState(null)
    
    const isEmail = /.+@.+/
    const navigation = useNavigation()

    const validateForm = async () => {
        const isEmptyUsername =  IsFormEmpty(username)
        setErrorUsername(isEmptyUsername)

        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)
        
        if (!isEmptyEmail && !isEmptyUsername) {
            if (isEmail.test(email)){
    
                try {
                    const response = await axios.post('https://trocapaginas-server-production.up.railway.app/verificar-email/',
                    JSON.stringify({email}),
                    {
                        headers: {'Content-Type': 'application/json'}
                    });

                    return true;

                }catch (error) {
                    if (!error?.response) {
                        setMessageError('Erro ao acessar a página');
                        return false;
                    
                    }else if(error.response?.status === 422) {
                        setMessageError('Usuário já cadastrado!');
                        setErrorUsername(true)
                        return false;
                    }
                }

            } else {
                setMessageError('E-mail inválido!')
            }
        } else {
            setMessageError('Insira todos os campos!')
        }

        return false;
    }

    const handleNextScreen = async () => {
        if (await validateForm()) {
            setNextPage(true)

        }else {
            setNextPage(false)
        }
    }

    const handleSubmitRegister = async (password) => {      
        try {
            const user = await axios.post('https://trocapaginas-server-production.up.railway.app/create',
            JSON.stringify({username, email, password, photo}),
            {
                headers: {'Content-Type': 'application/json'}
            });

            props.navigation.navigate('InitialPage', {user: user.data});

        } catch (error) {
            if (!error?.response) {
                setMessageError('Erro ao acessar a página');
            
            }else if(error.response?.status === 422) {
                setMessageError('Usuário já cadastrado!');
            }
        }
    }

    return (
        <View style={THEME.structure.container}>
            <View>
                <Text style={THEME.fonts.h1.bold}>CADASTRO</Text>

                <View style={styles.steps}>
                    <Text style={THEME.fonts.link}>ETAPA {nextPage ? 2 : 1}/2</Text>

                    <View style={styles.stepsBarContainer}>
                        <View 
                            style={[
                                styles.stepsBar,
                                {backgroundColor: THEME.colors.brownDark} 
                            ]}>    
                        </View>
                        <View
                            style={[
                                nextPage ? {backgroundColor: THEME.colors.brownDark} : {backgroundColor: THEME.colors.grayDark},
                                styles.stepsBar
                            ]}>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                {!nextPage ? 
                    <View style={THEME.structure.viewForm}> 
                        <Input 
                            label={'Nome do usuário'}
                            placeholder={'Insira seu usuário'}
                            value={username}
                            onChangeText={setUsername}
                            style={errorUsername && THEME.errors.input}
                        />

                        <Input
                            label={'Email'}
                            placeholder={'Insira seu email'}
                            value={email}
                            onChangeText={setEmail}
                            style={errorEmail && THEME.errors.input}
                        />

                        {messageError && <Text style={[THEME.fonts.text, THEME.errors.message]}>{messageError}</Text>}

                        <View style={THEME.structure.viewButton}>
                            <SimpleButton
                                type='submit'
                                onPress={handleNextScreen}
                                title={'CADASTRAR'}
                                color={'brownDark'}
                            />
                        </View>
                    </View>

                    : 

                    <CreatePassword 
                        buttonText={"CADASTRAR"}
                        onSubmit={handleSubmitRegister}
                    />}
            </View>
            
            <Links 
                text={"Possui conta?"}
                title={"Realizar login"}
                screen={"Login"}
            />
        </View>
    )
}