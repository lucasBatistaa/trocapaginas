import { StatusBar, View, FlatList, BackHandler} from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import * as Notifications from 'expo-notifications'

import axios from 'axios'
import { useUserStore } from '../../store/badgeStore'

import TopMenu from '../../components/Menus/TopMenu'
import Publication from '../../components/Publication'
import BottomMenu from '../../components/Menus/BottomMenu'
import AppLoader from '../../components/AppLoader'

import { styles } from './style'
import React from 'react'

export default function InitialPage(props) {
    const [ publications, setPublications ] = useState([])
    const [pageIsLoading, setPageIsLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState(false)

    const user = useUserStore(state => state.data);
    const saveUser = useUserStore(state => state.save);

    const navigation = useNavigation();

    useEffect(()=> {
        // user.logout()

        if(props.route.params?.page) {
            getUser();
        }

        getPublications();
        getNotificationPermission();
        getNotifications();

    }, []);
    
    const getUser = async() => {
        try {
            const response = await axios.get('https://trocapaginas-server.onrender.com/login/success')
            
            if(response.data.email !== null) {
                //setUserData(response.data);
                saveUser(response.data);

            }else {
                navigation.navigate(props.route.params.page, {error: 'Tentativa de acesso falhou, tente novamente!'});
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getNotifications = async () => {
        try {
            const response = await axios.get('https://trocapaginas-server.onrender.com/notifications');
            const notifications = response.data;

            const ownerBook = notifications[0]
            const receiverBook = notifications[1]

            ownerBook.forEach(async (userOwner) => {
                if((userOwner.email === user.email) && userOwner.status === 'pendente') {
                    receiverBook.forEach(async (userReceiver) => {
                        if(userReceiver.id_interest === userOwner.id_interest) {
                            await Notifications.scheduleNotificationAsync({
                                content: {
                                  title: `Interesse no livro "${userOwner.title}"`,
                                  body: `${userReceiver.name} demonstrou interesse em trocar o livro "${userOwner.title}" por "${userReceiver.title}". Você aceita a troca?`,
                                  data: {}
                                  
                                },
                                trigger: {
                                  seconds: 2
                                }
                            })
                        }
                    })
                }
            })

        } catch (error) {
            setNotification(false);
        }
    }

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldPlaySound: true,
          shouldShowAlert: true,
          shouldSetBadge: true,
        }),
      })
    
    const getNotificationPermission = async () => {
        const { status } = await Notifications.getPermissionsAsync();
        
        if (status !== 'granted') {
          const { status: newStatus } = await Notifications.requestPermissionsAsync();
          if (newStatus !== 'granted') {
            alert('Permissão para notificações não concedida!');
            return;
          }
        }
  
      };
    

    //impedir o usuário de voltar à tela de login 
    useFocusEffect(
        useCallback(() => {
            const backAction = () => {
                BackHandler.exitApp();

                return true;
            }

            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction,
            );

            return () => backHandler.remove();
        }, [])
    );

    const getPublications = async () => {
        const response = await axios.get('https://trocapaginas-server-production.up.railway.app/publications')
        const posts = response.data

        setPublications(posts)
        setPageIsLoading(false)
    }

    return (
        <>
            <View style={styles.container}> 
                <StatusBar barStyle={'light-content'} />

                <TopMenu/>

                <FlatList
                    contentContainerStyle = {styles.viewPublications}
                    data={publications}
                    renderItem={({ item }) => <Publication publication = {item}/>}
                    refreshing={loading}
                    onRefresh={getPublications}
                />
                <BottomMenu/>
            </View>  

            {pageIsLoading  && <AppLoader />}
        </>
    )
}