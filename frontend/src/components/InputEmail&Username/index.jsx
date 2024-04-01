import { View } from "react-native"
import Input from "../Input"

export default function InputEmailAndUsername () {
    return (
        <View> 
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
    )
}