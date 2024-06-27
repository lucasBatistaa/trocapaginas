import { useState, useEffect } from "react"
import { View, Image, Modal, Text, TouchableOpacity } from "react-native"

import { Input } from '../Input'
import Button from "../Button"

import axios from "axios";

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'

export default function ListOfBooks({title, visibleModal, onClose, bookId, setNameBook}) {
    const [ search, setSearch ] = useState('')
    const [ books, setBooks ] = useState([])
    const [ bookSelected, setBookSelected ] = useState('')
    const [ errorBook, setErrorBook ] = useState(false)

    useEffect(() => {
        if (search.length > 0) {
            responseToAPI()
        }
    }, [search])

    const handleBookChoiced = () => {
        if (bookSelected) {
            setNameBook(bookSelected)
            onClose()
        } else {
            setErrorBook(true)
        }   
    }

    // INPUT DE PESQUISA COM GOOGLE BOOKS
    const responseToAPI = async () => {
        try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?', {
                params: {
                    q: search,
                    fields: 'items(id,volumeInfo(title,imageLinks))',
                    maxResults: 5,
                    langRestrict: 'pt',
                    printType: 'books',
                    lang: 'pt-BR',
                    key: 'AIzaSyCdXretFQnJh86xMg1HvIlEVDloTNHo3BE'
                }}
            )
    
            let booksOfAPI = response.data.items

            booksOfAPI.map((book) => {
                if(book.volumeInfo.imageLinks) {
                    book.volumeInfo.imageLinks.thumbnail = book.volumeInfo.imageLinks.thumbnail.replace('http', 'https')
                }
            })
    
            setBooks(
                booksOfAPI.map(book => ({
                    id: book.id,
                    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
                    authors: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Autor desconhecido',
                    title: book.volumeInfo.title ? book.volumeInfo.title : 'Título desconhecido',
                }))
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={visibleModal}
            onRequestClose={onClose}
        >
            <View style={styles.contentBookToExchange}>
                <Ionicons
                    name="arrow-back-outline"
                    size={24}
                    style={styles.iconClose}
                    color={THEME.colors.brownDark}
                    onPress={onClose}
                />

                <Text style={[THEME.fonts.h1.bold, styles.title]}>
                    {title}
                </Text>

                <Input error={errorBook}>
                    <Input.Field
                        placeholder={'Informe o livro'}
                        onChangeText={setSearch}
                    />
                </Input>

                <View style={styles.listBooks}>
                    {
                        books &&
                            books.map((book) => (
                                <TouchableOpacity
                                    key={book.id}
                                    style={styles.book(bookSelected == book.title)}
                                    onPress={() => setBookSelected(book.title)}
                                >
                                    {
                                        book.image ? 
                                            <Image 
                                                source={{ uri: book.image }}
                                                style={styles.imageBook}
                                            />
                                        :
                                            <View style={styles.templateThumbnail} />
                                    }

                                    <Text style={styles.titleBook}>{book.title}</Text>
                                </TouchableOpacity>
                            ))
                    }
                </View>

                <Button 
                    title='CONFIRMAR' 
                    isLoading={false}
                    onPress={handleBookChoiced}
                />
            </View>
        </Modal>
    )
}