import { useState } from "react"
import { Text, View } from "react-native"

import { useNavigation } from "@react-navigation/native"

import axios from "axios";

import Button from "../../../components/Button"
import CreatePassword from "../../../components/Forms/CreatePassword"
import Links from "../../../components/Links"
import { Input } from "../../../components/Input"

import { THEME } from "../../../styles/Theme"
import { styles } from "./styles"
import { useUserStore } from '../../../store/badgeStore'

export default function RegisterEmail() {
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')

    const [ errorEmail, setErrorEmail ] = useState(false)
    const [ errorUsername, setErrorUsername ] = useState(false)
    const [ messageError, setMessageError ] = useState('')

    const [ nextPage, setNextPage ] = useState(false)
    const [ isLoading , setIsLoading ] = useState(false)
    const [ photo, setPhoto] = useState(null)
    
    const isEmail = /.+@.+/
    const navigation = useNavigation()

    //const user = useUserStore(state => state.save)

    const validateForm = async () => {
        setIsLoading(true);

        if (username.trim() && email.trim()) {
            if (isEmail.test(email)){
                try {
                    await axios.post('https://trocapaginas-server-production.up.railway.app/verificar-email/',
                    JSON.stringify({email}),
                    {
                        headers: {'Content-Type': 'application/json'}
                    })

                    return true

                } catch (error) {
                    setIsLoading(false);

                    if (!error?.response) {
                        setMessageError('Erro ao acessar a página');
                        
                    } else if (error.response?.status === 422) {
                        setMessageError('Usuário já cadastrado!');
                        setErrorUsername(true);
                    }
                }

            } else {
                setMessageError('E-mail inválido!');
            }
        } else {
            username.trim() ? setErrorUsername(false) : setErrorUsername(true);
            email.trim() ? setErrorEmail(false) : setErrorEmail(true);

            setMessageError('Insira todos os campos!');
        }

        setIsLoading(false);

        return false
    }

    const handleNextScreen = async () => {
        if (await validateForm()) {
            setIsLoading(false)
            setNextPage(true)

        } else {
            setNextPage(false)
        }
    }

    const handleSubmitRegister = async (password) => {      
        try {

            setIsLoading(true);

            const response = await axios.post('https://trocapaginas-server-production.up.railway.app/create',
            JSON.stringify({username, email, password, photo}),
            {
                headers: {'Content-Type': 'application/json'}
            })

            //user(response.data);

            navigation.navigate('InitialPage', { user: response.data });

        } catch (error) {

            setIsLoading(false)

            if (!error?.response) {
                setMessageError('Erro ao acessar a página');
            
            } else if (error.response?.status === 422) {
                setMessageError('Usuário já cadastrado!');
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={THEME.fonts.h1.bold}>
                    CADASTRO
                </Text>

                <View style={styles.stepsContainer}>
                    <Text style={THEME.fonts.link}>
                        ETAPA {nextPage ? 2 : 1}/2
                    </Text>

                    <View style={styles.stepsBarContainer}>
                        <View style={styles.stepsBar(true)} />    
                        <View style={styles.stepsBar(nextPage ? true : false)}/>
                    </View>
                </View>
            </View>
            
            {
                !nextPage ? 
                    <View> 
                        <Text 
                            style={[
                                THEME.fonts.text,
                                styles.label
                            ]}
                        >
                            Nome
                        </Text>
                        <Input error={errorUsername}>
                            <Input.Field 
                                placeholder={'Nome do usuário'}
                                onChangeText={setUsername}
                                
                            />
                        </Input>
                        
                        <Text 
                            style={[
                                THEME.fonts.text,
                                styles.label
                            ]}
                        >
                            Email
                        </Text>
                        <Input error={errorEmail}>
                            <Input.Field 
                                placeholder={'Insira seu email'}
                                onChangeText={setEmail}
                            />
                        </Input>
                        
                        {
                            messageError && (
                                <Text 
                                    style={[
                                        THEME.fonts.text, 
                                        THEME.errors.message
                                    ]}
                                >
                                    {messageError}
                                </Text>
                            )
                        }

                        <View style={styles.viewButton}>
                            <Button
                                title={'CADASTRAR'}
                                color={'brownDark'}
                                isLoading={isLoading}
                                onPress={handleNextScreen}
                            />
                        </View>
                    </View>
                : 
                <View>
                    <CreatePassword
                        titleButton={"CADASTRAR"}
                        isLoading={isLoading}
                        onSubmit={handleSubmitRegister}
                    />
                </View>
            }
            
            <Links 
                text={"Possui conta? "}
                title={"Realizar login"}
                screen={"Login"}
            />
        </View>
    )
}