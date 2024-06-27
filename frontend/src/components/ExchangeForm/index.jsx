import { useState, useEffect } from "react"
import { View, Image, Modal, Text, TouchableWithoutFeedback, TouchableOpacity, Alert } from "react-native"

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Input } from '../Input'
import Button from "../Button"

import axios from "axios";

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useUserStore } from "../../store/badgeStore";

export default function ExchangeForm({ visibleExchangeForm, onClose, titleBook, idUser }) {
    const [ date, setDate ] = useState(new Date())
    const [ dateString, setDateString ] = useState('')
    const [ dateIsChoiced, setDateIsChoiced ] = useState(false)
    const [ visibleModalBookToExchange, setVisibleModalBookToExchange] = useState(false)

    const [ search, setSearch ] = useState('')
    const [ books, setBooks ] = useState([])
    const [ bookChoiced, setBookChoiced] = useState('')
    const [ bookImage, setBookImage ] = useState('')
    const [ bookId, setBookId ] = useState('')
    const [bookWriter, setBookWriter] = useState('')
    const [ errorBook, setErrorBook ] = useState(false)
    const [ errorInput, setErrorInput ] = useState({
        date: false,
        book: false,
    })

    const user = useUserStore(state => state.data)
    useEffect(() => {
        if (dateIsChoiced) {
            dateToString()
        }
    }, [date, dateIsChoiced])

    useEffect(() => {
        if (search.length > 0) {
            responseToAPI()
        }
    }, [search])


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

    // INPUT - DATE
    const dateToString = async () => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é baseado em zero
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${day}/${month}/${year}`;
        
        setDateString(formattedDate)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate
        
        setDate(currentDate)

        dateToString()
        setDateIsChoiced(true)
    }

    const showCalendar = async () => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: 'date',
          is24Hour: true,
          minimumDate: new Date()
        })
    }

    const handleBookChoiced = () => {
        if (bookId) {
            setVisibleModalBookToExchange(false)
        } else {
            setErrorBook(true)
        }   
    }

    // ENVIAR DADOS DE TROCA PARA O BACKEND
    const handleSendExchangeConfirmation = async () => {
        if (dateString && bookId) {
            try {

                await axios.post('https://trocapaginas-server.onrender.com/save-book', {
                    userEmail: user.email,
                    imageBook: bookImage,
                    titleBook: bookChoiced,
                    writerBook: bookWriter,
                    ratingBook: 0,
                    bookReview: '',
                    choiceUser: 'exchange'
                })

                const response = await axios.post('https://trocapaginas-server.onrender.com/exchange', {
                        email: user.email,
                        dateExchange: dateString,
                        myBook: bookChoiced,
                        bookExchange: titleBook,
                        idUserOwner: idUser
                    }
                )

                setErrorInput({ date: false, book: false})
                setBookId('')
                setDateIsChoiced(false)
                setBookChoiced('')
                setDateString('')
                onClose()

                Alert.alert(`${response.data[0]}`, `${response.data[1]}`)
            
            }catch(error) {
                Alert.alert('Erro', error)
            }

        } else {
            setErrorInput({...errorInput, date: dateString.trim() ? true : true})
            setErrorInput({...errorInput, book: bookId ? false : true})
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visibleExchangeForm}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback>
                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={[THEME.fonts.h1.bold, styles.title]}>
                                    QUERO TROCAR
                                </Text>
                                <Ionicons 
                                    name="close"
                                    size={24}
                                    style={styles.iconClose}
                                    color={THEME.colors.brownDark}
                                    onPress={onClose}
                                />
                            </View>

                            <View style={styles.labelAndinput}>
                                <Text style={THEME.fonts.text}>Data da troca</Text>
                                
                                    <TouchableOpacity
                                        style={styles.input(errorInput.date)}
                                        onPress={showCalendar}
                                    >
                                        <Text style={styles.textInput}>{dateIsChoiced ? dateString : '.. / .. / ....'}</Text>
                                    
                                        <Ionicons 
                                            name="calendar-clear-outline"
                                            size={24}
                                            style={styles.iconClose}
                                            color={THEME.colors.brownDark}
                                        />
                                    </TouchableOpacity>

                            </View>

                            <View style={styles.labelAndinput}>
                                <Text style={THEME.fonts.text}>Local</Text>
                                
                                
                                <View style={styles.input(false)}>
                                    <Text style={styles.textInput}>Fundacc - Centro</Text>
                                </View>
                                   
                            </View>

                            <View style={styles.labelAndInput}>
                                <Text style={THEME.fonts.text}>Trocar por</Text>

                                <TouchableOpacity
                                    style={styles.input(errorInput.book)}
                                    onPress={() => setVisibleModalBookToExchange(true)}
                                >
                                    <Text style={styles.textInput}>
                                        { bookId ? bookChoiced : 'Escolha um livro'}
                                    </Text> 
                                </TouchableOpacity>
                            </View>
                            

                            <Button 
                                title='ENVIAR' 
                                isLoading={false}
                                onPress={handleSendExchangeConfirmation}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>

            <Modal 
                animationType="fade"
                transparent={true}
                visible={visibleModalBookToExchange}
                onRequestClose={onClose}
            >
                <View style={styles.contentBookToExchange}>
                    <Ionicons 
                        name="arrow-back-outline"
                        size={24}
                        style={styles.iconClose}
                        color={THEME.colors.brownDark}
                        onPress={() => setVisibleModalBookToExchange(false)}
                    />

                    <Text style={[THEME.fonts.h1.bold, styles.title]}>
                        Trocar por
                    </Text>

                    <Input error={errorBook}>
                        <Input.Field
                            placeholder={'Informe o livro'}
                            onChangeText={(event) => {
                                setSearch(event)
                            }}
                        />
                    </Input>

                    <View style={styles.listBooks}>
                        {
                            books &&
                                books.map((book) => (
                                    <TouchableOpacity
                                        key={book.id}
                                        style={styles.book(bookId == book.id)}
                                        onPress={() => {
                                            setBookId(book.id)
                                            setBookChoiced(book.title)
                                            setBookImage(book.image)
                                            setBookWriter(book.authors)
                                        }}
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
        </Modal>
    )
}