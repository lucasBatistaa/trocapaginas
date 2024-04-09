import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SimpleButton from '../../components/SimpleButton'
import Logo from '../../assets/logo.svg'

import { styles } from './styles'
import { THEME } from "../../styles/Theme";

export default function Slogan () {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Logo width={180} height ={180} />

            <Text style={[THEME.fonts.h2.normal, styles.slogan]}>
                Junte-se a uma incrível troca de experiências literárias e imaginativas no <Text style={{color: '#59372A'}}>Troca Páginas!</Text>
            </Text>

            <View style={styles.viewButtons}>
                <SimpleButton 
                    title={'CADASTRE-SE'} 
                    color={'brownDark'} 
                    name={'Login'}
                    onPress={() => navigation.navigate('Register')}
                />
                
                <SimpleButton 
                    title={'LOGIN'} 
                    color={'brownLight'}
                    name={'Login'}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>

        </View>
    )
}