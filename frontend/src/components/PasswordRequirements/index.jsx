import {useState} from "react"
import {View, Text} from "react-native"

import Ionicons from '@expo/vector-icons/Ionicons';


import Input from "../Input"

export default function PasswordRequirements (props) {
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(props.validate);
    const [ caracters, setCaracters ] = useState(false)
    const [ simbols, setSimbols ] = useState(true)
    const requirements = /^.{8,}$/
    
    
    requirements.test(password)
    // return

    function validPassword (password) {
        setCaracters(requirements.test(password))
    }

    return (
        <View>
            <Input
            label={"Senha"}
            placeholder={props.placeholder}
            value={password}
            onChangeText={(password) => {
                setPassword(password)
                validPassword(password)
            }}
            secureTextEntry
            />

            {props.validate && (
                <View>
                    {caracters ? <Ionicons name="checkmark-circle-outline" size={20} color={"#196805"}/> : <Ionicons name="close-circle-outline" size={20} color={"#CE1F1F"}/>}
                    {/* <View>{simbols ? <Ionicons name="checkmark-circle-outline" size={20} color={"#196805"}/> : <Ionicons name="close-circle-outline" size={20} color={"#CE1F1F"}/>} <Text>Letras maiúsculas e minúsculas</Text></View> */}
                
                </View>
                )}
        
        </View>
        

    )
}