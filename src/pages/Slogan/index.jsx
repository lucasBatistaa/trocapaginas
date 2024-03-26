import { Text, View } from "react-native";

import Button from '../../components/Button'
import Logo from '../../../assets/logo.svg'

import { styles } from './styles'
import { THEME } from "../../styles/Theme";

export default function Slogan ({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo width={180} height ={180} />

            <Text style={[THEME.fonts.h3, styles.slogan]}>
                Junte-se a uma incrível troca de experiências literárias e imaginativas no 
                <Text style={{color: THEME.colors.brownDark}}>
                    Troca Páginas!
                </Text>
            </Text>

            <View style={styles.viewButtons}>
                <Button 
                    title={'REGISTRE-SE'} 
                    color={THEME.colors.brownDark} 
                    onPress={() => navigation.navigate('Login')}
                />
                <Button 
                    title={'LOGIN'} 
                    color={THEME.colors.brownMedium}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}