import { Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { THEME } from '../../styles/Theme'
import { useNavigation } from '@react-navigation/native'

export default function BookTemplate({ id, image, title, author, description }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.navigate('Book', { 
                    bookId: id ,
                    bookImage: image,
                    bookTitle: title,
                    bookAuthor: author,
                    bookDescription: description,
                })
            }}
        >
            <Image
                style={styles.image}
                source={{ uri: image }}
            />

            <Text
                style={[ THEME.fonts.h2.normal, styles.titleBook ]}
                numberOfLines={1}
                ellipsizeMode='tail'
            >
                {title}
            </Text>

            <Text style={[ THEME.fonts.text, styles.authorBook ]}>
                {author}
            </Text>
        </TouchableOpacity>
    )
}
