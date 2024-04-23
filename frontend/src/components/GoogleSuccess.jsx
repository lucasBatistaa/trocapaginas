import { Text, View } from "react-native";
import { THEME } from "../styles/Theme";

export default function GoogleSuccess () {
    return (
        <View style={THEME.structure.container}>
            <Text style={THEME.fonts.h1.bold}>Login efetuado com sucesso!</Text>
            <Text style={[THEME.fonts.text, {textAlign: 'center'}]}> Feche o navegador e retorne para o aplicativo </Text>
        </View>
    )
}