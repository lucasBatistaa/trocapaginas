import { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, View, Image, Text } from "react-native"

import Publication from "../../components/Publication"
import ExchangeBook from "../../components/ExchangeBook"
import BottomMenu from '../../components/Menus/BottomMenu'
import ModalAvaliation from "./components/ModalAvaliation"
import Comment from "../../components/Comment"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"

import Ionicons from '@expo/vector-icons/Ionicons'
import ModalSynopsis from "./components/ModalSynopsis"
import { useNavigation } from "@react-navigation/native"

export default function Book() {
    const [ publications, setPublications ] = useState([])
    const [ modalCommentVisible, setModalCommentVisible ] = useState(false)
    const [ modalAvaliationVisible, setModalAvaliationVisible ] = useState(false)
    const [ modalSynopsisVisible, setModalSynopsisVisible ] = useState(false)
    const [ avaliation, setAvalation ] = useState(0)
    const [ showReviews, setShowReviews ] = useState(true)
   
    const navigation = useNavigation()
    const stars = Array.from({ length: 5 }, (_, index) => index <= avaliation ? true : false)

    useEffect(() => {
        // CHAMADA DA API
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
                isLike: true
            },
            {
                photo: require('../../assets/foto-perfil.png'),
                username: 'Stephanie',
                textPost: 'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.',
                bookImage: require('../../assets/foto-livro.png'),
                isLike: true
            },
        ])

        setAvalation(3)
    }, [])


    return (
        <View style={styles.container}>

            {/* Botão de voltar */}
            <Ionicons 
                name="arrow-back-outline"
                size={24}
                color={THEME.colors.brownDark}
                style={styles.iconGoBack}
                onPress={() => { navigation.navigate('Bookshelf') }}
            />

            <View style={styles.bookOverview}>
                <Image 
                    source={require('../../assets/book.png')}
                    style={styles.imageBook}
                />

                <View style={styles.resumeAndActions} >
                    <View>
                        <Text style={THEME.fonts.h1.bold}>Orgulho e Preconceito</Text>
                        <Text
                            style={[
                                THEME.fonts.h2.normal,
                                styles.nameAuthor
                            ]}
                        >
                            Jane Austen
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
                    style={styles.tabButton(showReviews)}
                    onPress={() => setShowReviews(true)}
                >
                    <Text style={[
                            THEME.fonts.text, 
                            styles.tabTitle(showReviews)
                        ]}
                    >
                        RESENHAS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.tabButton(!showReviews)}
                    onPress={() => setShowReviews(false)}
                >
                    <Text style={[
                            THEME.fonts.text, 
                            styles.tabTitle(!showReviews)
                        ]}
                    >
                        TROCAS
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.viewContentOfTab}
                showsVerticalScrollIndicator={false}
            >
                { 
                    showReviews ? (
                        
                        publications.map((publication, index) => (
                            <Publication 
                                key={index}
                                photo={publication.photo}
                                username={publication.username}
                                textPost={publication.textPost}
                                bookImage={publication.bookImage}
                                isLike={publication.isLike}
                            />
                        ))
                    ) : (
                        <ExchangeBook 
                            idUser={1}
                            imageUser={require('../../assets/foto-perfil.png')}
                            username={'Lucas'}
                        /> 
                    )
                }
            </ScrollView>

            <BottomMenu />
            
            <ModalAvaliation    
                modalVisible={modalAvaliationVisible}
                onClose={() => setModalAvaliationVisible(false)}
            />

            <ModalSynopsis 
                modalVisible={modalSynopsisVisible}
                onClose={() => setModalSynopsisVisible(false)}
            />

            <Comment 
                modalVisible={modalCommentVisible} 
                onClose={() => setModalCommentVisible(false)} 
            />
        </View>
    )   
}
