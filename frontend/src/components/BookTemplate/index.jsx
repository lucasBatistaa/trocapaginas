import { Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { THEME } from '../../styles/Theme'
import { useNavigation } from '@react-navigation/native'

export default function BookTemplate({ image, titleBook, authorBook }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Book')}
        >
            <Image
                source={image}
                style={styles.image}
            />
            <Text
                style={[
                    THEME.fonts.h2.normal,
                    styles.titleBook,
                    styles.colorBrownDark
                ]}>
                    {titleBook}
            </Text>
            <Text
                style={[
                    THEME.fonts.text,
                    styles.colorBrownDark
                ]}>
                    {authorBook}
            </Text>
        </TouchableOpacity>
    )
}
