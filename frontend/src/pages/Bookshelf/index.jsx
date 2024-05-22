import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import TopMenu from '../../components/Menus/TopMenu'
import BookTemplate from '../../components/BookTemplate'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './styles'
import { THEME } from '../../styles/Theme'

export default function Bookshelf() {
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        setBooks([{
            id: '34534',
            image: require('../../assets/book.png'),
            titleBook: 'Orgulho e Preconceito',
            authorBook: 'Jane Austen',
        }])
    }, [])

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
                    ]}
                >
                    Estante Virtual
                </Text>

                {
                    books.map((book, index) => (
                        <BookTemplate 
                            key={index}
                            image={book.image}
                            titleBook={book.titleBook}
                            authorBook={book.authorBook}
                        />
                    ))
                }
            </ScrollView>

            <BottomMenu />
        </View>
    )
}
