import { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

import Button from "../../components/Button";

import { styles } from "./styles";
import Input from "../../components/Input";
import { THEME } from "../../styles/Theme";
import { useNavigation } from "@react-navigation/native";
import PasswordRequirements from "../../components/PasswordRequirements";

export default function Reset () {
    const [email, setEmail] = useState('')

    return (
        <View>
            <Text>ALTERAR SENHA</Text>

            <PasswordRequirements
                placeholder={"Insira sua senha"}
                validate
            />

        </View>
    )
}