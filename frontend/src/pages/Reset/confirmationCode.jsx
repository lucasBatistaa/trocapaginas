import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import InputCode from "../../components/Forms/InputCode";
import SimpleButton from "../../components/Button/SimpleButton";
import { styles } from "./styles";

import { THEME } from "../../styles/Theme";

export default function ConfirmationCode () {
    return (
        <View style={styles.container}>
            <Text style={[THEME.colors.brownDark, THEME.fonts.h1.bold]}>CÓDIGO DE CONFIRMAÇÃO</Text>

            <View style={stylePage.principalContent}>
                <View style={styles.alert}>
                    <Ionicons name="alert-circle-outline" size={32} color={THEME.colors.brownMedium}/>
                    <Text style={[THEME.fonts.text, {color: THEME.colors.brownMedium}]}>Enviamos um código para o seu e-mail. Verifique sua caixa de entrada (ou spam) e digite abaixo os números informados.</Text>
                </View>

                <InputCode/>

                <SimpleButton
                    title={"CONFIRMAR"}
                    color={'brownDark'}
                />
            </View>
        </View>
    )
}

const stylePage = StyleSheet.create ({
    principalContent: {
        flex: 1,
        marginTop: 62,
        alignItems: 'center',
        paddingHorizontal: 28,
    }
})