import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import CreatePassword from "../../../components/CreatePassword";

import { THEME } from "../../../styles/Theme";
import { styles } from "./style";
import IsFormEmpty from "../../../utils/isFormEmpty";

export default function RegisterEmail() {
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ errorEmail, setErrorEmail ] = useState(false)
    const [ errorUsername, setErrorUsername ] = useState(false)
    const [ messageError, setMessageError ] = useState('')
    const [ nextPage, setNextPage ] = useState(false)
    
    const navigation = useNavigation()

    const handleNextScreen = () => {
        const isEmptyEmail =  IsFormEmpty(email)
        setErrorEmail(isEmptyEmail)
        
        const isEmptyPassword =  IsFormEmpty(username)
        setErrorUsername(isEmptyPassword)
        
        if (!isEmptyEmail && !isEmptyPassword) {
            setMessageError('')
            setNextPage(!nextPage)
        } else {
            setMessageError('Insira todos os campos!')
        }
    }

    const handleSubmit = () => {
        
    }

    return (
        <View style={styles.container}>
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
                            label={'Email'}
                            placeholder={'Insira seu email'}
                            value={email}
                            onChangeText={setEmail}
                            style={errorEmail && styles.inputError}
                        />

                        <Input 
                            label={'Nome de usuário'}
                            placeholder={'Insira seu usuário'}
                            value={username}
                            onChangeText={setUsername}
                            style={errorUsername && styles.inputError}
                        />
                    </View>
                    : <CreatePassword buttonText={"CADASTRAR"}/>}

                {messageError && <Text style={[THEME.fonts.text, styles.messageError]}>{messageError}</Text>}
            </View>
            
            <View style={styles.access}>
                <Button 
                    type='submit'
                    onPress={handleNextScreen}
                    title={nextPage ? 'CADASTRAR' : 'PRÓXIMO'}
                    color={'brownDark'} 
                />
                <Text>
                    Possui conta? 
                    <Text 
                        onPress={() => { navigation.navigate('Login')}}
                        style={[
                            THEME.fonts.link, 
                            {color: THEME.colors.brownMedium}
                        ]}> Realizar login
                    </Text>
                </Text>
            </View>
        </View>
    )
}