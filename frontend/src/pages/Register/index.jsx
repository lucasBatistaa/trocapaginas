import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as WebBrowser from 'expo-web-browser'
import { useState } from "react"

import ButtonWithIcon from "../../components/Button/ButtonWithIcon"
import Links from "../../components/Links"
import Info from "../../components/Info"

import { THEME } from '../../styles/Theme'

export default function Register() {

    const navigation = useNavigation();
    const[modalVisible, setModalVisible] = useState(false);

    const GoogleLogin =  async () => {
        try {
            WebBrowser.openBrowserAsync('https://trocapaginas-server-production.up.railway.app/auth/google', '_self');
        
            setModalVisible(true);

            setTimeout(() => {
                navigation.navigate('InitialPage');
                setModalVisible(false);
            }, 18000);

        }catch(error) {
            console.log(error);
        }

    };

    return (
        <View style={[THEME.structure.container, modalVisible ? {opacity: 0.5 } : '']}>
            <Text style={THEME.fonts.h1.bold}>CADASTRO</Text>

            <View style={{gap: 12,}}>
                <ButtonWithIcon
                    title={'Continuar com Google'}
                    onPress={GoogleLogin}
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

            {modalVisible && <Info /> }

        </View>
    )
}