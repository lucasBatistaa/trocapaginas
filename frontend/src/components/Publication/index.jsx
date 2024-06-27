import { View, Image, Text, TouchableOpacity, Share, Alert } from 'react-native'
import { useEffect, useState } from 'react'

import Comment from '../Comment'

import { styles } from './style'
import { THEME } from '../../styles/Theme'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useUserStore } from '../../store/badgeStore'

export default function Publication({ publication }) {
    const [ clickHeartIcon, setClickHeartIcon ] = useState(false)
    const [ modalCommentVisible, setModalCommentVisible ] = useState(false)

    const stars = new Array(5).fill(null)
    const navigation = useNavigation()

    const id_publication = publication.id_post !== undefined ? publication.id_post : publication.id_review;
    const user = useUserStore(state => state.data)

    useEffect(() => {
        getLike()
    }, [publication])
    // Compartilhar 
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `*Olha esse post do Troca Páginas!* \n\n> ${publication.content}\n\nConfira: https://ifspcaragua.com/index.php/2024/03/15/troca-paginas/`,
                // url: `../../assets/foto-perfil.png`
            })

            if (result.action === Share.sharedAction) {
                console.log('Compartilhado com sucesso!')

            } else if (result.action === Share.dismissedAction) {
                Alert.alert('Não compartilhado', 'Não foi possível compartilhar a publicação', [
                    {text: 'Ok'}
                ])
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const getUserOwner = async () => {

        try{
            const response = await axios.post('https://trocapaginas-server.onrender.com/user-publication', {
                id_user: publication.id_user
            });

            navigation.navigate('Profile', {user: response.data})

        } catch (error) {
            console.log(error);
        }
    }

    const saveLike = async (clickHeartIcon) => {
        setClickHeartIcon(clickHeartIcon)

        if(clickHeartIcon){
            try {
                await axios.get('https://trocapaginas-server.onrender.com/set-like', {
                    params: {
                        email: user?.email,
                        id_publication: id_publication
                    }
                })
    
            } catch (error) {
                Alert.alert('Erro', error)
            }

        }else {
            try {
                await axios.get('https://trocapaginas-server.onrender.com/set-dislike', {
                    params: {
                        email: user.email,
                        id_publication: id_publication
                    }
                })
            } catch (error) {
                Alert.alert('Erro', error)

            }
        }        
    }

    const getLike = async() => {
        try {
            const response = await axios.get('https://trocapaginas-server.onrender.com/get-like', {
                params: {
                    email: user.email,
                    id_publication: id_publication
                }
            })

            setClickHeartIcon(response.data)

        } catch (error) {
            Alert.alert('Erro', error)
        }
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.header}
                activeOpacity={0.7}
                //onPress={() => navigation.navigate('Profile', {user: userOwner})}
                onPress={getUserOwner}
            >
            
                <Image 
                    style={{width: 32, height: 32, borderRadius: 20}}
                    source={{uri: publication.photo}} />
                    
                <Text style={[THEME.fonts.h3, {color: THEME.colors.brownDark}]}>{publication.name}</Text>
            </TouchableOpacity>
            <View style={styles.publication}>
                <View style={styles.post}>

                    {/* <Text style={THEME.fonts.link}>
                        {publication.namebook}
                    </Text> */}

                    <Text style={THEME.fonts.text}>
                        {publication.content}
                    </Text>


                    <View style={styles.viewStars}>
                        {
                            parseInt(publication.rating) > 0 && (
                                stars.map((_, index) => (
                                    <Text key={index}>
                                        <Ionicons
                                            name={publication.rating - 1 >= index ? 'star' : 'star-outline'}
                                            size={16}
                                            color={THEME.colors.brownLight}
                                        />
                                    </Text>
                                ))
                            )
                        }

                        
                    </View>

                    <View style={styles.icons}>
                        <TouchableOpacity 
                            onPress={async() => saveLike(!clickHeartIcon)}
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
                    source={{uri: publication.image_post ? publication.image_post : 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-05-256.png'}} 
                    // source={{ uri: publication.image_post }}
                    style={styles.imagePost}
                />
            </View>

            <Comment idPublication={id_publication} modalVisible={modalCommentVisible} onClose={() => setModalCommentVisible(false)} /> 
        </View>   
    )
}
