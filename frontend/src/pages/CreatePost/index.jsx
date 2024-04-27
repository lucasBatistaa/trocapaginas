import { useState } from 'react'
import { ImageURI } from '../../utils/imageURI'
import { ButtonAddImage } from './components/ButtonAddImage'
import { RadioButtons } from './components/RadioButtons'
import Review from './Review'
import Post from './Post'


export default function CreatePost(props) {
    const navigation = useNavigation();
    
    const[userdata, setUserData] = useState({});

    const getUser = async() => {
        try {
            const response = await axios.get('https://trocapaginas-server-production.up.railway.app/login/success', {withCredentials: true})
            console.log('response', response)
        } catch (error) {
            console.log(error);
        }
    }

useEffect(() => {
    getUser();
}, []);
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
                    <Text>username</Text>
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
