import { View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles } from './styles';
import { THEME } from '../../styles/Theme';
import { useNavigation } from '@react-navigation/native';

export default function ExchangeBook({ idUser, username, imageUser }) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.user}
                onPress={() => navigation.navigate('Profile')}
            >
                <Image 
                    source={imageUser}
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
                onPress={() => {}}  
            />
        </View>
    )
}