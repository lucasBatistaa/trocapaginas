import { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { TabReviews, TabExchanges } from './components/TabsView'
import Comment from "../../components/Comment"
import BottomMenu from '../../components/Menus/BottomMenu'

import ModalAvaliation from "./components/ModalAvaliation"
import ModalSynopsis from "./components/ModalSynopsis"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Book() {
    const [ publications, setPublications ] = useState([])
    const [ bookExchanges, setBookExchanges ] = useState([])
    const [ book, setBook ] = useState({})

    const [ tabView, setTabView ] = useState('review')
    const [ avaliation, setAvalation ] = useState(0)
    
    const [ modalCommentVisible, setModalCommentVisible ] = useState(false)
    const [ modalAvaliationVisible, setModalAvaliationVisible ] = useState(false)
    const [ modalSynopsisVisible, setModalSynopsisVisible ] = useState(false)
    
    const navigation = useNavigation()
    const stars = Array.from({ length: 5 }, (_, index) => index <= avaliation - 1 ? true : false)

    useEffect(() => {
        // CHAMADAS DA API

        //BOOK
        setBook({
            id: '34534',
            image: require('../../assets/book.png'),
            name: 'Orgulho e Preconceito',
            author: 'Jane Austen',
            synopsys: 'Livro de romance de séculos passados.'
        })

        // AVALIAÇÃO DO LIVRO
        setAvalation(4)

        //PUBLICAÇÕES
        setPublications([
            {
                photo: require('../../assets/foto-perfil.png'),
                username: 'Stephanie',
                textPost: 'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.',
                bookImage: require('../../assets/foto-livro.png'),
                isLike: true
            },
            {
                photo: require('../../assets/foto-perfil.png'),
                username: 'Stephanie',
                textPost: 'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.',
                bookImage: require('../../assets/foto-livro.png'),
                isLike: false
            },
            {
                photo: require('../../assets/foto-perfil.png'),
                username: 'Stephanie',
                textPost: 'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.',
                bookImage: require('../../assets/foto-livro.png'),
                isLike: true
            },
        ])

        // TROCAS DISPONÍVEIS
        setBookExchanges([
            {
                idUser: 1,
                imageUser: require('../../assets/foto-perfil.png'),
                username: 'Lucas'
            },
            {
                idUser: 1,
                imageUser: require('../../assets/foto-perfil.png'),
                username: 'Lucas'
            }
        ])
    }, [])

    const renderTabView = () => {
        switch (tabView) {
            case 'review':
                return <TabReviews publications={publications} />
        
            case 'exchange': 
                return <TabExchanges bookExchanges={bookExchanges} />
        }
    }

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
                    source={book.image}
                    style={styles.imageBook}
                />

                <View style={styles.resumeAndActions} >
                    <View>
                        <Text style={THEME.fonts.h1.bold}>{book.name}</Text>
                        <Text
                            style={[
                                THEME.fonts.h2.normal,
                                styles.nameAuthor
                            ]}
                        >
                            {book.author}
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
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setModalCommentVisible(true)}
                            >
                                <Text style={styles.actions}>
                                    comentários
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
            <ScrollView
                contentContainerStyle={styles.viewContentOfTab}
                showsVerticalScrollIndicator={false}
            >
                { renderTabView() }
            </ScrollView>

            <BottomMenu />
            
            {/* Modals */}
            <ModalAvaliation    
                modalVisible={modalAvaliationVisible}
                onClose={() => setModalAvaliationVisible(false)}
            />

            <ModalSynopsis 
                modalVisible={modalSynopsisVisible}
                text={book.synopsys}
                onClose={() => setModalSynopsisVisible(false)}
            />

            <Comment 
                id={book.id}
                modalVisible={modalCommentVisible} 
                onClose={() => setModalCommentVisible(false)} 
            />
        </View>
    )   
}
