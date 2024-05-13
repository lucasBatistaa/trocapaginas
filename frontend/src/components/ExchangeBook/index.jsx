import { View, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles } from './styles';
import { THEME } from '../../styles/Theme';

export default function ExchangeBook({ idUser, username, imageUser }) {
    return (
        <View style={styles.container}>
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

            <Ionicons 
                name='sync-outline'
                size={20} 
                color={THEME.colors.brownDark} 
                onPress={() => {console.log(idUser)}}  
            />
        </View>
    )
}