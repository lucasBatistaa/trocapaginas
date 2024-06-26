import { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import ExchangeForm from '../ExchangeForm'

import { styles } from './styles';
import { THEME } from '../../styles/Theme';
import Ionicons from '@expo/vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native';

export default function ExchangeBook({ idUser, username, imageUser, titleBook }) {
    const [ visibleExchangeForm, setVisibleExchangeForm ] = useState(false)
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.user}
                // onPress={() => navigation.navigate('Profile', {user: idUser})}
            >
                <Image 
                    source={{uri: imageUser}}
                    style={styles.image}
                    width={32}
                    height={32}
                />

                <Text 
                    style={[
                        THEME.fonts.h2.normal,
                        styles.username
                    ]}
                >
                    {username}
                </Text>
            </TouchableOpacity>

            <Ionicons 
                name='sync-outline'
                size={20} 
                color={THEME.colors.brownDark} 
                onPress={() => { setVisibleExchangeForm(true) }}  
            />

            <ExchangeForm 
                visibleExchangeForm={visibleExchangeForm}
                onClose={() => setVisibleExchangeForm(false)}
                titleBook={titleBook}
                idUser={idUser}
            />
        </View>
    )
}