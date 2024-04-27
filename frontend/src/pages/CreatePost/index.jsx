import { View, Text, Image } from 'react-native'

import SimpleButton from '../../components/Button/SimpleButton'
import Input from '../../components/Forms/Input'
import { THEME } from '../../styles/Theme'
import { styles } from './style'
import { useNavigation } from "@react-navigation/native";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CreatePost(props) {
    const navigation = useNavigation();

    const[userdata, setUserData] = useState({});

        const getUser = async() => {
            try {
                const response = await axios.get('https://trocapaginas-server-production.up.railway.app/login/success', {withCredentials: true})
                console.log('response', response)
            } catch (error) {
                console.log(error);
            }
        }

    useEffect(() => {
        getUser();
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.viewAddImage}>
                <Text>Adicionar imagem</Text>
            </View>
            <View style={styles.viewPost}>
                <View>
                    <Image
                        source={require('../../assets/foto-perfil.png')}
                    />
                    <Text>username</Text>
                </View>
                <View style={styles.viewRadioButtons}>
                    <View style={styles.radioButton}>
                        <Ionicons name='radio-button-off-outline' size={24} color={THEME.colors.brownDark}/>
                        <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownDark}]}>Post</Text>
                    </View>
                    <View style={styles.radioButton}>
                        <Ionicons name='radio-button-on-outline' size={24} color={THEME.colors.brownDark}/>
                        <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownDark}]}>Resenha</Text>
                    </View>
                </View>
                <Input 
                    placeholder={'Escolher livro'}
                />
                <SimpleButton 
                    title={'PUBLICAR'}
                    color={'brownDark'}
                />
            </View>
        </View>
    )
}
