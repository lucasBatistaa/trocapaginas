import { useEffect, useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'

import Publication from '../../components/Publication'
import TopMenu from '../../components/Menus/TopMenu'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './style'
import { useUserStore } from '../../store/badgeStore'

export default function InitialPage() {
    const [ publications, setPublications ] = useState([])

<<<<<<< HEAD
    const user = useUserStore(state => state.data);
    console.log(user);
    console.log('o console anterior é o user');

    // const [ userData, setUserData ] = useState({})

    // const getUser = async() => {
    //     try {
    //         const user = await axios.get('https://trocapaginas-server-production.up.railway.app/login/success')
    //         setUserData(user.data)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
=======
    // Dados do usuário
    const user = useUserStore()
>>>>>>> 189e158f55df168c4d0d938b75b2c8d12d683d6e

    useEffect(() => {
        // if(props.route.params === undefined) {
        //     getUser()

        // }else {
        //     setUserData(props.route.params.user); 
        // }

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
                            username={user.data.name}
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