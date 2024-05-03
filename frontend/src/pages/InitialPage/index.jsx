import { StatusBar, View } from 'react-native'
import { useEffect, useState } from 'react';

import { THEME } from '../../styles/Theme'

import Publication from '../../components/Publication';
import TopMenu from '../../components/Menus/TopMenu';
import BottomMenu from '../../components/Menus/BottomMenu';

export default function InitialPage() {
    const [ publications, setPublications ] = useState([])

    useEffect(() => {
        // CHAMADA DA API
        setPublications([{
            photo: require('../../assets/foto-perfil.png'),
            username: 'Stephanie',
            textPost: 'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.',
            bookImage: require('../../assets/foto-livro.png'),
            isLike: true
        }])
    }, [])
    return (
        <View style={{flex: 1}}>
            <StatusBar barStyle={'light-content'} />

            <TopMenu
                photo={require('../../assets/foto-perfil.png')}
            />

            <View style={THEME.structure.container}>
                {
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
                }
            </View>

            <BottomMenu/>
        </View>
        
    )
}
