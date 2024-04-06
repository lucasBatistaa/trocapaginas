import {useState} from "react"
import {View, Text} from "react-native"

import Ionicons from '@expo/vector-icons/Ionicons';


import Input from "../Input"
import Button from "../Button";
import IsFormEmpty from "../../utils/isFormEmpty";
import { THEME } from "../../styles/Theme"; 
import styles from "./styles"

export default function PasswordRequirements (props) {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [messageError, setMessageError] = useState("")
    const [ caracters, setCaracters ] = useState(false)
    const [letterCase, setLetterCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [ simbols, setSimbols ] = useState(false)

    const requirements = {
        minimum: /^.{8,}$/,
        hasNumber: /(?=.*\d)/,
        hasLetterCase: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
        hasSimbol: /\W|_/
    }
    
    function validateRequirements (password) {
        setCaracters(requirements.minimum.test(password))
        setLetterCase(requirements.hasLetterCase.test(password))
        setNumbers(requirements.hasNumber.test(password))
        setSimbols(requirements.hasSimbol.test(password))
    }

    const handleSubmit = () => {
        const isEmptyPassword = IsFormEmpty(password) 
        setPasswordError(isEmptyPassword)

        const isEmptyConfirmPassword = IsFormEmpty(confirmPassword) 
        setConfirmPasswordError(isEmptyConfirmPassword)

        if (!isEmptyPassword && !isEmptyConfirmPassword) {
            setMessageError("")

            if (caracters && numbers && letterCase && simbols){

                if (password == confirmPassword) {
                    navigation.navigate('Slogan');
                    //mandar para o banco
                }
                else {
                    setMessageError("As senhas não conferem")
                    setConfirmPasswordError(true)
                }
            }
            else {
                setMessageError("A senha precisa atender todos os requisitos.")
                setPasswordError(true)
            }
        }
        else {
            setMessageError("insira todos os campos!")
        }
    } 

    return (
        <View style={THEME.fonts.text}>
            <Input
                label={"Senha"}
                placeholder={"Insira sua senha"}
                value={password}
                onChangeText={(password) => {
                    setPassword(password)
                    validateRequirements(password)
                }}
                style={passwordError && THEME.errors.input}
                secureTextEntry
            />

            {
                <View>
                    {caracters ? <Ionicons name="checkmark-circle-outline" size={20} color={"#196805"}/> : <Ionicons name="close-circle-outline" size={20} color={"#CE1F1F"}/>}
                    <Text style={THEME.fonts.text}>Pelo menos oito caracteres</Text>

                    {letterCase ? <Ionicons name="checkmark-circle-outline" size={20} color={"#196805"}/> : <Ionicons name="close-circle-outline" size={20} color={"#CE1F1F"}/>}
                    <Text style={THEME.fonts.text}>Letras maiúsculas e minúsculas</Text>     

                    {numbers ? <Ionicons name="checkmark-circle-outline" size={20} color={"#196805"}/> : <Ionicons name="close-circle-outline" size={20} color={"#CE1F1F"}/>}
                    <Text style={THEME.fonts.text}>Pelo menos um número</Text>

                    {simbols ? <Ionicons name="checkmark-circle-outline" size={20} color={"#196805"}/> : <Ionicons name="close-circle-outline" size={20} color={"#CE1F1F"}/>}
                    <Text style={THEME.fonts.text}>Pelo menos um símbolo especial (Ex.: @ # $ ! *)</Text>
                </View>
            }

            <Input
                label={"Confirmr senha"}
                placeholder={"Confirme sua senha"}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={confirmPasswordError && THEME.errors.input}
                secureTextEntry
            />

            {messageError && <Text style={[THEME.fonts.text, THEME.errors.message]}>{messageError}</Text>}

            <Button
                onPress={handleSubmit}
                title={"ALTERAR"}
                color={'brownDark'}
            />

        </View>
    )
}