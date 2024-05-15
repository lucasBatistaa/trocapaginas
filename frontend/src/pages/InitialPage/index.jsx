import { useEffect, useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'

import axios from 'axios'

import Publication from '../../components/Publication'
import TopMenu from '../../components/Menus/TopMenu'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './style'
import { useUserStore } from '../../store/badgeStore'

export default function InitialPage(props) {
    const [ publications, setPublications ] = useState([])

    // Dados do usuário
    const user = useUserStore(state => state.data)
    console.log(user);
    console.log('o console anterior é o user');

    useEffect(() => {
        // CHAMADA DA API
        setPublications([
            {
                photo: require('../../assets/foto-perfil.png'),
                username: 'Stephanie',
                textPost: 'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.',
                bookImage: require('../../assets/foto-livro.png'),
                isLike: true
            }
        ])
    }, [])
    return (
        <View style={styles.container}> 
            <StatusBar barStyle={'light-content'} />

            <TopMenu/>

            <ScrollView 
                contentContainerStyle={styles.viewPublications}
                showsVerticalScrollIndicator={false}
            >
                {
                    publications.map((publication, index) => (
                        <Publication 
                            key={index}
                            id={publication.id}
                            photo={publication.photo}
                            username={user.name}
                            textPost={publication.textPost}
                            bookImage={publication.bookImage}
                            isLike={publication.isLike}
                        />
                    ))
                }
            </ScrollView>

            <BottomMenu/>
        </View>
    )
}
