import { TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './style';
import { THEME } from '../../../../styles/Theme';

export function ButtonAddImage(props) {
    return (
        <TouchableOpacity
            {...props}
            style={styles.button}
            activeOpacity={0.9}
        >
            <Ionicons name={'camera-outline'} size={28} color={THEME.colors.black}/>
            <Text style={styles.buttonText}>Adicionar imagem</Text>
        </TouchableOpacity>
    )
}