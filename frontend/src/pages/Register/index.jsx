import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import ButtonWithIcon from "../../components/Button/ButtonWithIcon"
import Links from "../../components/Links"

import { THEME } from '../../styles/Theme'
import { styles } from "./styles"

export default function Register() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={THEME.fonts.h1}>CADASTRO</Text>

            <View style={styles.buttonsView}>
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