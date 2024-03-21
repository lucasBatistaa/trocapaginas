import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import Button from "../../components/Button";

import { styles } from "./styles";
import Input from "../../components/Input";

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {    
        if (email && password) {
            console.log('Informe todos os campos!')
        }

        console.log('email:', email)
        console.log('senha', password)
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>LOGIN</Text>
            
            <View style={styles.formInput}>
                <Input 
                    label={"E-mail"}
                    placeholder={"Insira seu email"}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'

                />

                <Input 
                    label={"Senha"}
                    placeholder={"Insira sua senha"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity>
                    <Text style={styles.resetPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <Button 
                    style={styles.button}
                    onPress={handleSubmit}
                    title='ACESSAR'
                    color={'brownDark'}         
                />

                <Text>
                    Não possui conta? <Text style={{color: '#826059'}}>Criar conta</Text>
                </Text>
            </View>
        </View>
    )
}