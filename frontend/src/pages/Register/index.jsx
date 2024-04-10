import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import ButtonWithIcon from "../../components/Button/ButtonWithIcon"
import Links from "../../components/Links"

import { THEME } from '../../styles/Theme'

export default function Register() {

    const navigation = useNavigation()

    return (
        <View style={THEME.structure.container}>
            <Text style={THEME.fonts.h1.bold}>CADASTRO</Text>

            <View style={{gap: 12,}}>
                <ButtonWithIcon
                    title={'Continuar com Google'}
                />

                <ButtonWithIcon 
                    icon={'mail-outline'}
                    title={'Registrar com Email'}
                    onPress={() => navigation.navigate('RegisterEmail')}
                />
            </View>

            <Links
                text={'Possui conta?'}
                title={'Realizar login'}
                screen={'Login'}
            />
        </View>
    )
}