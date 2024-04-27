import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './style'
import { THEME } from '../../styles/Theme'
import Comment from '../Comment';

export default function Publication({photo, username, textPost, isLike, bookImage}) {
    const [ clickHeartIcon, setClickHeartIcon ] = useState(isLike)
    const [ modalVisible, setModalVisible ] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={{width: 32, height: 32}}
                    source={photo} />
                    
                <Text style={[THEME.fonts.h3, {color: THEME.colors.brownDark}]}>{username}</Text>
            </View>
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
                            onPress={() => setModalVisible(true)}
                        >
                            <Ionicons name='chatbubble-ellipses-outline' size={24} color={THEME.colors.brownDark} />
                        </TouchableOpacity>
                        <Ionicons name='share-social-outline' size={24} color={THEME.colors.brownDark} />
                    </View>
                </View>
                
                <Image 
                    style={styles.imagePost}
                    source={bookImage} />
            </View>

            <Comment modalValue={modalVisible} />
        </View>
    )
}
