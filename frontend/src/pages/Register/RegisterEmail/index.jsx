import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IsFormEmpty from "../../../utils/isFormEmpty";

import Input from "../../../components/Forms/Input";
import SimpleButton from "../../../components/Button/SimpleButton";
import CreatePassword from "../../../components/Forms/CreatePassword";
import Links from "../../../components/Links";

import { THEME } from "../../../styles/Theme";
import { styles } from "./styles";

export default function RegisterEmail() {
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ errorEmail, setErrorEmail ] = useState(false)
    const [ errorUsername, setErrorUsername ] = useState(false)
    const [ messageError, setMessageError ] = useState('')
    const [ nextPage, setNextPage ] = useState(false)
    
    const isEmail = /.+@.+/
    const navigation = useNavigation()

    const handleNextScreen = () => {
        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)
        
        const isEmptyPassword =  IsFormEmpty(username)
        setErrorUsername(isEmptyPassword)
        
        if (!isEmptyEmail && !isEmptyPassword) {
            if (isEmail.test(email)){

                // Validar nome de usuário no banco
                if (username === 'lucas') {
                    setMessageError('Nome de usuário já existe, insira outro!')
                    setErrorUsername(true)
                    setUsername('')
                } else {

                    //registrar usuário
                    setNextPage(true)
                }
            } else {
                setMessageError('E-mail inválido!')
            }
        } else {
            setMessageError('Insira todos os campos!')
        }
    }

    const handleSubmit = () => {
        
    }

    return (
        <View style={THEME.container}>
            <View>
                <Text style={THEME.fonts.h1}>CADASTRO</Text>

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
                    <View style={styles.formInput}> 
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

                        <View style={styles.button}>
                            <SimpleButton
                                type='submit'
                                onPress={handleNextScreen}
                                title={'CADASTRAR'}
                                color={'brownDark'}
                            />
                        </View>
                    </View>
                    : <CreatePassword buttonText={"CADASTRAR"}/>}
            </View>
            
            <Links 
                text={"Possui conta?"}
                title={"Realizar login"}
                screen={"Login"}
            />
        </View>
    )
}