import { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, View, Image, Text, Alert } from "react-native"

import { useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"

import { TabReviews, TabExchanges } from './components/TabsView'
import Comment from "../../components/Comment"
import BottomMenu from '../../components/Menus/BottomMenu'
import Loading from '../../components/Loading'

import ModalAvaliation from "./components/ModalAvaliation"
import ModalSynopsis from "./components/ModalSynopsis"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'
import ExchangeBook from "../../components/ExchangeBook"

export default function Book() {
    const route = useRoute()
    const { bookId, bookImage, bookTitle, bookAuthor, bookDescription } = route.params

    const [ reviews, setReviews ] = useState([])
    const [ messageError, setMessageError ] = useState('')
    const [ bookExchanges, setBookExchanges ] = useState([])
    const [ commentsBook, setCommentsBook ] = useState([])

    const [ tabView, setTabView ] = useState('review')
    const [ avaliation, setAvalation ] = useState(0)
    
    const [ modalCommentVisible, setModalCommentVisible ] = useState(false)
    const [ modalAvaliationVisible, setModalAvaliationVisible ] = useState(false)
    const [ modalSynopsisVisible, setModalSynopsisVisible ] = useState(false)

    const [ loading, setLoading ] = useState(false)
    
    const navigation = useNavigation()
    const stars = Array.from({ length: 5 }, (_, index) => index <= avaliation - 1 ? true : false)

    useEffect(() => {
        setLoading(true)
        // CHAMADAS DA API

        // AVALIAÇÃO DO LIVRO
        getRatingBook()

        // PUBLICAÇÕES REFERENTES AO LIVRO (ID - bookId)
        getBookReviews()

        // TROCAS DISPONÍVEIS
        getExchanges()

        //TESTE 
        setBookExchanges([
            {idUser: '3', username: 'Lucas', imageUser: 'book.png'},
            {idUser: '5', username: 'Stephanie', imageUser: 'book.png'}
        ])

    }, [])

    const getBookReviews = async() => {
        try {
            const response = await axios.get('https://trocapaginas-server.onrender.com/book-reviews', {
                params: {
                    title: bookTitle
                }
            })

            const reviews = response.data

            reviews.length > 0 && tabView === 'review' ? setReviews(reviews) : setMessageError('Nenhuma resenha disponível para esse livro')

        } catch (error) {
            setMessageError(error)

        } finally {
            setLoading(false)
        }
    }
    
    const getExchanges = async () => {
        console.log(bookTitle);
        try {
            console.log('entrou na chamada');
            const response = await axios.get('http://localhost:6005/my-exchange', {
                params: {
                    bookTitle: bookTitle
                }
            });
            const exchanges = response.data;
    
            setBookExchanges(exchanges);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    

    const getRatingBook = async () => {
        try {
            const response = await axios.post('https://trocapaginas-server.onrender.com/get-book', {
                imageBook: bookImage
            });


            setAvalation(response.data[0].rating)

        }catch (error) {
            setAvalation(0)
        }
    }

    const renderTabView = () => {
        switch (tabView) {
            case 'review':
                return <TabReviews publications={reviews} />
        
            case 'exchange': 
                return <TabExchanges bookExchanges={bookExchanges} />
        }
    }

    if (loading) return <Loading />
        
    return (
        <View style={styles.container}>

            {/* Botão de voltar */}
            <Ionicons 
                name="arrow-back-outline"
                size={24}
                color={THEME.colors.brownDark}
                style={styles.iconGoBack}
                onPress={() => navigation.goBack()}
            />

            <View style={styles.bookOverview}>
                <Image 
                    source={{ uri: bookImage }}
                    style={styles.imageBook}
                />

                <View style={styles.resumeAndActions} >
                    <View>
                        <Text style={THEME.fonts.h1.bold}>{bookTitle}</Text>
                        <Text
                            style={[
                                THEME.fonts.h2.normal,
                                styles.nameAuthor
                            ]}
                        >
                            {bookAuthor}
                        </Text>
                    </View>

                    <View>
                        <View style={styles.avaliation}>
                            <View style={styles.starsAvaliation}>
                                { 
                                    stars.map((filled) => (
                                        <Ionicons
                                            name={filled ? 'star' : 'star-outline'}
                                            size={20}
                                            color={THEME.colors.brownLight}
                                        />
                                    ))
                                }
                            </View>
                            <Ionicons 
                                name="add-circle-outline" 
                                size={20} 
                                color={THEME.colors.brownMedium}
                                onPress={() => {setModalAvaliationVisible(true)}}
                            />
                        </View>

                        <View style={styles.synopsisAndComment}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setModalSynopsisVisible(true)}
                            >
                                <Text style={styles.actions}>
                                    sinopse
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.tabView}>
                <TouchableOpacity 
                    style={styles.tabButton(tabView === 'review')}
                    onPress={() => setTabView('review')}
                >
                    <Text style={[
                            THEME.fonts.text, 
                            styles.tabTitle(tabView === 'review')
                        ]}
                    >
                        RESENHAS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.tabButton(tabView === 'exchange')}
                    onPress={() => setTabView('exchange')}
                >
                    <Text style={[
                            THEME.fonts.text, 
                            styles.tabTitle(tabView === 'exchange')
                        ]}
                    >
                        TROCAS
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Conteúdo das Abas */}

            {/* {
                messageError && <Text style={[THEME.fonts.h2.bold, {marginTop: 20, marginLeft: 20}]}>{messageError}</Text>
            } */}

            <ScrollView
                contentContainerStyle={styles.viewContentOfTab}
                showsVerticalScrollIndicator={false}
            >
                { 
                    renderTabView()
                }
            </ScrollView>

            <BottomMenu />
            
            {/* Modals */}
            <ModalAvaliation    
                modalVisible={modalAvaliationVisible}
                onClose={() => setModalAvaliationVisible(false)}
                book = {[bookImage, bookTitle, bookAuthor, avaliation, bookDescription]}
            />

            <ModalSynopsis 
                modalVisible={modalSynopsisVisible}
                text={bookDescription}
                onClose={() => setModalSynopsisVisible(false)}
            />
            
        </View>
    )   
}
