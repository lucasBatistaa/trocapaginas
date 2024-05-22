import { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, ImageBackground, Alert } from 'react-native'

import { useNavigation } from "@react-navigation/native"

import Review from './Review'
import Post from './Post'
import Loading from '../../components/Loading'
import { ButtonAddImage } from './components/ButtonAddImage'
import { RadioButtons } from './components/RadioButtons'
import { ImageURI } from '../../utils/imageURI'

import { THEME } from '../../styles/Theme'
import { styles } from './style'

import axios from 'axios'

export default function CreatePost(props) {
    const [isSelectedPost, setIsSelectedPost] = useState(true)
    const [imageURI, setImageURI] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [messageError, setMessageError] = useState('')
    
    const[userdata, setUserData] = useState({});
    
    const navigation = useNavigation()

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
    }, []);

    const handleSelectAnImage = async () => {
        try {
            const URI = await ImageURI();

            setImageURI(URI);
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreatePost = async (text, nameBook, title = '', avaliation = 0) => {
        setIsLoading(true)

        if(isSelectedPost){
            try{
                const data_post = {
                    userEmail: userdata.email,
                    text: text,
                    nameBook: nameBook,
                    imageURI: imageURI,
                }

                const response = await axios.post('https://trocapaginas-server-production.up.railway.app/post', 
                data_post);

                setIsLoading(false)

                Alert.alert('Publicação', 'Publicação realizada com sucesso!', [
                    {text: 'OK', onPress: () => navigation.navigate('Slogan')}
                ])

            } catch(error) {

                setIsLoading(false)
                if(!error?.response) {
                    console.log(error)
                    setMessageError('Erro ao acessar a página');

                }else if (error?.response === 500) {
                    setMessageError('Não foi possivel criar o post devido a um erro interno do servidor');          
                }
            }   

        } else {
            try {
                const data_review = {
                    userEmail: userdata.email,
                    text: text,
                    nameBook: nameBook,
                    imageURI: imageURI,
                    title: title,
                    rating: avaliation
                }

                const response = await axios.post('https://trocapaginas-server-production.up.railway.app/review', 
                data_review);
                
                setIsLoading(false)

                Alert.alert('Publicação', 'Publicação realizada com sucesso!', [
                    {text: 'OK', onPress: () => navigation.navigate('Slogan')}
                ])

            } catch(error){
                setIsLoading(false)
                console.log(error)

                if(!error?.response) {
                    setMessageError('Erro ao acessar a página');
                
                }else if (error?.response === 500) {
                    setMessageError('Não foi possivel criar a resenha devido a um erro interno do servidor');
                }
            }
        }    
    } 

    if (!userdata) return <Loading />

    return (
        <View style={styles.container}>
            <View style={styles.viewAddImage}>
                {
                    imageURI ? 
                        <ImageBackground 
                            source={{ uri: imageURI }} 
                            style={styles.imageBackground}
                        >
                            <ButtonAddImage onPress={handleSelectAnImage} />
                        </ImageBackground>
                    : 
                        <ButtonAddImage onPress={handleSelectAnImage} />
                }
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.viewPost}
            >
                <View style={styles.viewUsername}>
                    <Image
                        style={{width: 40, height: 40, borderRadius: 20}}
                        source={{uri: userdata.photo}}
                    />
                    <Text 
                        style={[
                            THEME.fonts.h1.normal, 
                            styles.username
                        ]}
                    >
                        {userdata.name}
                    </Text>
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

                {
                    messageError && 
                    <Text 
                        style={[
                            THEME.fonts.text,
                            THEME.errors.message 
                        ]}
                    >
                        {messageError}
                    </Text>
                }
                { 
                    isSelectedPost ? 
                        <Post 
                            onSubmit={handleCreatePost}
                            isLoading={isLoading}
                        /> 
                    : 
                        <Review 
                            onSubmit={handleCreatePost}
                            isLoading={isLoading}
                        />
                }
            </ScrollView>
        </View>
    )
}
