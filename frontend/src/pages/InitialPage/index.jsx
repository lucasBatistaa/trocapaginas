import { useEffect, useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'

import Publication from '../../components/Publication'
import TopMenu from '../../components/Menus/TopMenu'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './style'
import { useUserStore } from '../../store/badgeStore'

export default function InitialPage() {
    const [ publications, setPublications ] = useState([])

    // Dados do usuário
    const user = useUserStore();

    const getPublications = async() => {
        const response = await axios.get('http://localhost:6005/publications');
        const posts = response.data;

        const initialPosts = posts.map(post => ({
            photo: post.photo,
            username: post.name,
            textPost: post.content,
            bookImage: post.image_post,
            isLike: true
            })
        )

        setPublications(initialPosts);
    }

    useEffect(() => {
        // CHAMADA DA API
        getPublications();
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