import { ScrollView, StatusBar, View, BackHandler, Alert, Text, Image, FlatList} from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';

import { THEME } from '../../styles/Theme';

import Publication from '../../components/Publication'
import TopMenu from '../../components/Menus/TopMenu'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './style'
import { useUserStore } from '../../store/badgeStore'

export default function InitialPage(props) {
    const [ publications, setPublications ] = useState([]);
    const [ userData, setUserData ] = useState({});
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const user = useUserStore(state => state.data);
    console.log(user);
    console.log('o console anterior é o user');

    const getUser = async() => {
        try {
            const user = await axios.get('https://trocapaginas-server-production.up.railway.app/login/success')
            
            if(user.data.email !== null) {
                setUserData(user.data);

            }else {
                navigation.navigate(props.route.params.page, {error: 'Tentativa de acesso falhou, tente novamente!'});
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getPublications = async() => {
        const response = await axios.get('https://trocapaginas-server-production.up.railway.app/publications');
        const posts = response.data;

        const initialPosts = posts.map(post => ({
            photo: post.photo,
            username: post.name,
            textPost: post.content,
            bookImage: post.image_post,
            isLike: false
            })
        )

        setPublications(initialPosts);
    }

    useEffect(() => {

        if(props.route.params === undefined) {
            getUser();

        }else {
            //setUserData(props.route.params.user); 
        }

        // CHAMADA DA API
        
        getPublications();
    }, []);

    //impedir o usuário de voltar à tela de login 
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Sair', 'Você realmente deseja sair do aplicativo?', [
            {
              text: 'Não',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'Sim', onPress: () => {
                setUserData({});
                navigation.navigate('Slogan');
                BackHandler.exitApp();
                }
            },
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
    }, []);
    
    return (
        <View style={styles.container}> 
            <StatusBar barStyle={'light-content'} />

            <TopMenu
                user = {userData} 
            />

            <FlatList
                contentContainerStyle = {styles.viewPublications}
                data={publications}
                renderItem={({item}) => <Publication publication = {item}/>}
                refreshing={loading}
                onRefresh={getPublications}
            />
            <BottomMenu/>
        </View>
        
    )
}