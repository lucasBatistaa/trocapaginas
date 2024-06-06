import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'

import { THEME } from "../../styles/Theme"
import { styles } from './styles'
import { useUserStore } from "../../store/badgeStore"
import { useEffect, useState } from "react"

export default function Slogan () {
    const navigation = useNavigation()
    const user = useUserStore(state => state.data)

    useEffect(() => {
        if (user) {
            navigation.navigate('InitialPage')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Logo width={180} height ={180} />

            <Text style={[THEME.fonts.h2.normal, styles.slogan]}>
                Junte-se a uma incrível troca de experiências literárias e imaginativas no <Text style={{color: THEME.colors.brownDark}}>Troca Páginas!</Text>
            </Text>

            <View style={styles.viewButtons}>
                <Button 
                    title={'CADASTRE-SE'} 
                    color={'brownDark'} 
                    onPress={() => navigation.navigate('Register')}
                />
                
                <Button 
                    title={'LOGIN'} 
                    color={'brownMedium'}
                    onPress={() => navigation.navigate('Login')}
                    testID="login-button"
                />
            </View>
        </View>
    )
}