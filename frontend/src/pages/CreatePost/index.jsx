import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'


import { THEME } from '../../styles/Theme'
import { styles } from './style'

import { useState } from 'react'
import { ImageURI } from '../../utils/imageURI'
import { ButtonAddImage } from './components/ButtonAddImage'
import { RadioButtons } from './components/RadioButtons'
import Review from './Review'
import Post from './Post'


export default function CreatePost() {
    const [ isSelectedPost, setIsSelectedPost ] = useState(true)
    
    const [ imageURI, setImageURI ] = useState(null)
    
    const handleSelectAnImage = async () => {
        const URI = await ImageURI()
        setImageURI(URI)
    }

    const handleCreatePost = (text, nameBook, title = '', avaliation = 0) => {
        if (imageURI) {
            console.log(title, text, nameBook, avaliation, imageURI)
        } else {
            console.log('Sem imagem, validar ainda')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewAddImage}>
                {imageURI ? 
                    <ImageBackground source={{ uri: imageURI }} style={styles.imageBackground}>
                        <ButtonAddImage 
                            onPress={handleSelectAnImage}
                        />
                    </ImageBackground>
                : 
                    <ButtonAddImage 
                        onPress={handleSelectAnImage}
                    />
                }
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.viewPost}
            >
                <View style={styles.viewUsername}>
                    <Image
                        source={require('../../assets/foto-perfil.png')}
                    />
                    <Text style={[THEME.fonts.h1.normal, { color: THEME.colors.brownDark}]}>Nome da usuária</Text>
                </View>

                <View style={styles.viewRadioButtons}>
                    <RadioButtons 
                        label='Post'
                        isSelectedPost={!isSelectedPost}
                        onPress={() => setIsSelectedPost(true)}
                    />

                    <RadioButtons 
                        label='Resenha'
                        isSelectedPost={isSelectedPost}
                        onPress={() => setIsSelectedPost(false)}
                    />
                </View>

                { isSelectedPost ? <Post onSubmit={handleCreatePost}/> : <Review onSubmit={handleCreatePost}/>}
            </ScrollView>
        </SafeAreaView>
    )
}
