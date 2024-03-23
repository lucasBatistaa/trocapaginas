import { Text, View } from "react-native";

import Button from '../../components/Button'
import Logo from '../../../assets/logo.svg'

import { styles } from './styles'

export default function Slogan ({navigation}) {
    return (
        <View style={styles.container}>
            <Logo width={180} height ={180} />

            <Text style={styles.slogan}>
                Junte-se a uma incrível troca de experiências literárias e imaginativas no <Text style={{color: '#59372A'}}>Troca Páginas!</Text>
            </Text>

            <View style={styles.viewButtons}>
                <Button 
                    title={'REGISTRE-SE'} 
                    color={'brownDark'} 
                    name={'Login'}
                    onPress={() => navigation.navigate('Login')}
                />
                <Button 
                    title={'LOGIN'} 
                    color={'brownLight'}
                    name={'Login'}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>

        </View>
    )
}