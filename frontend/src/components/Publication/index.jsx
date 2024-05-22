import { View, Image, Text, TouchableOpacity, Share } from 'react-native'
import { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './style'
import { THEME } from '../../styles/Theme'

import Comment from '../Comment';

export default function Publication(/*{photo, username, textPost, isLike, bookImage}*/ {publication}) {
    const [ clickHeartIcon, setClickHeartIcon ] = useState(publication.isLike)
    const [ modalCommentVisible, setModalCommentVisible ] = useState(false)

    const closeComment = () => {
        setModalCommentVisible(false)
    }
    
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `${publication.textPost}`,
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
            <View style={styles.header}>
                <Image 
                    style={{width: 32, height: 32, borderRadius: 20}}
                    source={{uri: publication.photo}} />
                    
                <Text style={[THEME.fonts.h3, {color: THEME.colors.brownDark}]}>{publication.username}</Text>
            </View>

            <View style={styles.publication}>
                <View style={styles.post}>
                    <Text style={THEME.fonts.text}>
                        {publication.textPost}
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
                    source={{uri: publication.bookImage}} 
                    style={{width: 80, height: 80}}
                    />
            </View>

            <Comment modalVisible={modalCommentVisible} onPress={closeComment} />
        </View>
    )
}
