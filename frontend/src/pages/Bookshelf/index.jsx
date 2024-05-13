import { View, Text, Image, ScrollView } from 'react-native'
import TopMenu from '../../components/Menus/TopMenu'
import BottomMenu from '../../components/Menus/BottomMenu'
import BookTemplate from '../../components/BookTemplate'
import { styles } from './styles'
import { THEME } from '../../styles/Theme'
import { useNavigation } from '@react-navigation/native'

export default function Bookshelf() {

    return (
        <View style={styles.container}>
            <TopMenu />
            
            <ScrollView 
                contentContainerStyle={styles.bookshelf}
                showsVerticalScrollIndicator={false}
            >
                <Text 
                    style={[
                        THEME.fonts.h1.bold,
                        styles.title
                    ]}>
                    Estante Virtual
                </Text>

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                    
                />

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                />

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                />

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                />

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                />

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                />

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                />

                <BookTemplate 
                    image={require('../../assets/book.png')}
                    titleBook={'Orgulho e Preconceito'}
                    authorBook={'Jane Austen'}
                />
            </ScrollView>

            <BottomMenu />
        </View>
    )
}
