import { Text, View } from "react-native";

import PasswordRequirements from "../../components/PasswordRequirements";

export default function Reset () {

    return (
        <View>
            <Text>ALTERAR SENHA</Text>

            <PasswordRequirements/>

        </View>
    )
}