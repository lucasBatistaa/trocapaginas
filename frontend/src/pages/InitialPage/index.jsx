import { ScrollView, StatusBar, View } from 'react-native'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { THEME } from '../../styles/Theme'

import Publication from '../../components/Publication';
import TopMenu from '../../components/Menus/TopMenu';
import BottomMenu from '../../components/Menus/BottomMenu';
import { styles } from './style';

export default function InitialPage(props) {
    const [ publications, setPublications ] = useState([]);
    const [ userData, setUserData ] = useState({});

    const getUser = async() => {
        try {
            const user = await axios.get('https://trocapaginas-server-production.up.railway.app/login/success')
            setUserData(user.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(props.route.params === undefined) {
            getUser();

        }else {
            setUserData(props.route.params.user);  
        }

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
    }, [])
    return (
        <View style={styles.container}> 
            <StatusBar barStyle={'light-content'} />

            <TopMenu
                photo={{uri: userData.photo}}
            />

            <ScrollView 
                contentContainerStyle={styles.viewPublications}
                showsVerticalScrollIndicator={false}
            >
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
            </ScrollView>

            <BottomMenu/>
        </View>
        
    )
}
