import { View, Text, Image, ScrollView } from 'react-native'
import TopMenu from '../../components/Menus/TopMenu'
import BottomMenu from '../../components/Menus/BottomMenu'
import BookTemplate from '../../components/BookTemplate'
import { styles } from './styles'
import { THEME } from '../../styles/Theme'

export default function Bookshelf() {
    return (
        <View style={styles.container}>
            <TopMenu />
            
            <Text 
                style={[
                    THEME.fonts.h1.bold,
                    styles.title
                ]}>
                Estante Virtual
            </Text>
            <ScrollView 
                contentContainerStyle={styles.bookshelf}
                showsVerticalScrollIndicator={false}
            >
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
