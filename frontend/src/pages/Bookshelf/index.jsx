import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import TopMenu from '../../components/Menus/TopMenu'
import BookTemplate from '../../components/BookTemplate'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './styles'
import { THEME } from '../../styles/Theme'
import axios from 'axios'

export default function Bookshelf() {
    const [ search, setSearch ] = useState('best sellers')
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        googleBooks()

    }, [])

    const googleBooks = async () => {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?', {
            params: {
                q: search,
                subject: search,
                fields: 'items(id,volumeInfo(title,authors,description,imageLinks))',
                maxResults: 40,
                langRestrict: 'pt',
                printType: 'books',
                lang: 'pt-BR',
                // 'key': 'AIzaSyCdXretFQnJh86xMg1HvIlEVDloTNHo3BE'
            }}
        )

        const books = response.data.items

        setBooks(
            books.map(book => ({
                id: book.id,
                image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
                title: book.volumeInfo.title ? book.volumeInfo.title : 'Título desconhecido',
                authors: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Autor desconhecido',
                description: book.volumeInfo.description
            }))
        )
    }

    return (
        <View style={styles.container}>
            <TopMenu 
                search={setSearch} 
                onPress={googleBooks} 
            />
            
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
                    books.map((book) => (
                        <BookTemplate 
                            key={book.id}
                            id={book.id}
                            image={book.image}
                            title={book.title}
                            author={book.authors}
                            description={book.description}
                        />
                    ))
                }
            </ScrollView>

            <BottomMenu />
        </View>
    )
}
