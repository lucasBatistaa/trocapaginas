import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import { THEME } from '../../styles/Theme'

export default function BookTemplate({ image, titleBook, authorBook }) {
    return (
        <View style={styles.container}>
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
        </View>
    )
}
