import { View, Image, Text, TouchableOpacity, Share } from 'react-native'
import { useState } from 'react'

import Comment from '../Comment'

import { styles } from './style'
import { THEME } from '../../styles/Theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function Publication({ id, photo, username, textPost, isLike, bookImage }) {
    const [ clickHeartIcon, setClickHeartIcon ] = useState(isLike)
    const [ modalCommentVisible, setModalCommentVisible ] = useState(false)

    const navigation = useNavigation()

    // Função para fechar modal do Comentário
    const closeComment = () => {
        setModalCommentVisible(false)
    }
    
    // Compartilhar 
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `${textPost}`,
                // url: `../../assets/foto-perfil.png`
            })

            if (result.action === Share.sharedAction) {
                console.log(result)
                console.log('Compartilhado')

            } else if (result.action === Share.dismissedAction) {
                console.log('Não compartilhado')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.header}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Profile')}
            >
                <Image 
                    style={{width: 32, height: 32}}
                    source={photo} />
                    
                <Text style={[THEME.fonts.h3, {color: THEME.colors.brownDark}]}>{username}</Text>
            </TouchableOpacity>

            <View style={styles.publication}>
                <View style={styles.post}>
                    <Text style={THEME.fonts.text}>
                        {textPost}
                    </Text>

                    <View style={styles.icons}>
                        <TouchableOpacity 
                            onPress={() => setClickHeartIcon(!clickHeartIcon)}
                        >
                            <Ionicons name={clickHeartIcon ? 'heart-sharp' : 'heart-outline'} size={24} color={THEME.colors.brownDark} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setModalCommentVisible(true)}
                        >
                            <Ionicons name='chatbubble-ellipses-outline' size={24} color={THEME.colors.brownDark} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onShare}
                        >
                            <Ionicons name='share-social-outline' size={24} color={THEME.colors.brownDark} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Image 
                    style={styles.imagePost}
                    source={bookImage} />
            </View>

            <Comment idPublication={id} modalVisible={modalCommentVisible} onClose={closeComment} />
        </View>
    )
}
