import { Text, View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { THEME } from "../../styles/Theme";
import { styles } from "./style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ errorEmail, setErrorEmail ] = useState(false)
    const [ errorUsername, setErrorUsername ] = useState(false)
    
    const navigation = useNavigation()

    const handleScreenConfirmUser = () => {
        navigation.navigate('Reset')
    }

    return (
        <View style={styles.container}>
            <Text style={THEME.h1}>CADASTRO</Text>

            <View style={styles.formInput}>
                <View style={styles.steps}>
                    <Text style={THEME.link}>ETAPA 1/2</Text>

                    <View style={styles.stepsBarContainer}>
                        <View style={[{backgroundColor: THEME.colors.brownDark}, styles.stepsBar]}></View>
                        <View style={[{backgroundColor: THEME.colors.grayDark}, styles.stepsBar]}></View>
                    </View>
                </View>

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
        
            <View style={styles.access}>
                <Button 
                    onPress={handleScreenConfirmUser}
                    title='PRÓXIMO'
                    color={'brownDark'} 
                />
                <Text>Possui conta? <Text style={[THEME.link, {color: THEME.colors.brownMedium}]}>Realizar login</Text></Text>
            </View>
        </View>
    )
}