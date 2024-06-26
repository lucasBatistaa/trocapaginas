import { StatusBar, View, FlatList, BackHandler, Alert} from 'react-native'
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
    const [bookAccepted, setBookAccepted] = useState(false)

    const notification = [];
    const user = useUserStore(state => state.data);
    const saveUser = useUserStore(state => state.save);

    const navigation = useNavigation();

    let myBook;
    let bookExchange;

    useEffect(()=> {

        // user.logout()

        if(props.route.params?.page) {
            getUser();
        }

        getPublications();
        getNotificationPermission();
        getNotifications();

    }, []);

    useEffect(() => {
        if(!bookAccepted) {
            const intervalId = setInterval(() => {
                showNotification(myBook, bookExchange);
    
            }, 10000); 
    
            return () => clearInterval(intervalId); 
        }
        
    }, [bookAccepted]);
    
    const getUser = async() => {
        try {
            const response = await axios.get('https://trocapaginas-server.onrender.com/login/success')
            
            if(response.data?.email !== null) {
                console.log(response.data);
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
            const response = await axios.get('http://192.168.43.70:6005/notifications');
            const notifications = response.data;

            const ownerBook = notifications[0]
            const receiverBook = notifications[1]

            console.log('owner: ', ownerBook)
            console.log('receiver: ', receiverBook)

            ownerBook.forEach(async (userOwner) => {
                if((userOwner?.email === user?.email) && userOwner.status === 'pendente') {
                    receiverBook.forEach(async (userReceiver) => {
                        console.log(userOwner.id_interest)
                        if(userReceiver.id_interest === userOwner.id_interest) {
                            console.log(userReceiver.name)
                            await Notifications.scheduleNotificationAsync({
                                content: {
                                  title: `Interesse no livro "${userOwner.title}"`,
                                  body: `${userReceiver.name} demonstrou interesse em trocar o livro "${userOwner.title}" por "${userReceiver.title}". Você aceita a troca?`,
                                  data: {message: `${userReceiver.name} demonstrou interesse em trocar o livro "${userOwner.title}" por "${userReceiver.title}". Você aceita a troca?`}
                                },
                                trigger: {
                                  seconds: 2
                                }
                            })

                            notification.push({
                                title: `Interesse no livro "${userOwner.title}"`,
                                body: `${userReceiver.name} demonstrou interesse em trocar o livro "${userOwner.title}" por "${userReceiver.title} - ${userReceiver.writer}". \n\nVocê aceita a troca?`
                            })

                            myBook = userOwner.title
                            bookExchange = userReceiver.title
                            showNotification(userOwner.title, userReceiver.title)
                        }
                    })
                }
            })

            receiverBook.forEach(async (userReceiver) => {
                if((userReceiver?.email === user?.email) && (userReceiver.status === 'recusada' || userReceiver.status === 'aceita')) {
                    ownerBook.forEach(async (userOwner) => {
                        if(userOwner.id_interest === userReceiver.id_interest) {
                            let userDecision;
                            const titleNotification = `Solicitação de troca ${userReceiver.status}`

                            if(userReceiver.status === 'recusada') {
                                userDecision = 'recusou'
                            
                            }else if(userReceiver.status === 'aceita') {
                                userDecision = 'aceitou'
                            }

                            let message = `${userOwner.name} ${userDecision} a troca do livro "${userOwner.title}" por "${userReceiver.title}".`

                            userDecision === 'aceitou' ? message += `\n\nRetire o livro solicitado na FUNDACC (R. Santa Cruz, 396 - Centro) no dia 00/00/0000 e deixe o livro "${userReceiver.title}" na mesma data. \n\nAguardamos você!` : message = message

                            await Notifications.scheduleNotificationAsync({
                                content: {
                                  title: titleNotification,
                                  body: message,
                                  data: {}
                                },
                                trigger: {
                                  seconds: 2
                                }
                            })

                            showNotificationUserReceiver(titleNotification, message)

                        }
                    })
                }
            })

        } catch (error) {
            Alert.alert("Erro!", error)
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

    const showNotification = (titleBook, titleBookReceiver) => {
        if(notification.length > 0) {
            notification.map((message) => {
                Alert.alert(message.title, message.body, 
                    [
                        {
                            text: 'Sim', 
                            onPress: () => exchangeAccept(titleBook, titleBookReceiver, 'aceita')
                        },

                        {
                            text: 'Não',
                            onPress: () => exchangeAccept(titleBook, titleBookReceiver, 'recusada')
                        }
                ])
            })
        }
    }

    const showNotificationUserReceiver = (titleNotification, message) => {
        Alert.alert(titleNotification, message, [
            {text: 'Ok'}
        ])
    }

    const exchangeAccept = async (titleBook, titleBookReceiver, status) => {
        setBookAccepted(true)
        try {
            await axios.post('https://trocapaginas-server.onrender.com/accept-exchange', {
                email: user?.email,
                titleBook: titleBook,
                status: status
            })

            const message = status === 'aceita' ? `Deixe "${titleBook}" na FUNDACC (R. Santa Cruz, 396 - Centro) até 00/00/0000 e retire o livro "${titleBookReceiver}"\n\nBoa leitura!` : `Você optou por não trocar o livro "${titleBook}" por "${titleBookReceiver}"\n\nNotificaremos o usuário que solicitou a troca. Obrigado por utilizar nosso aplicativo!`

            Alert.alert(`Troca ${status}`, message, [
                    {text: 'Ok'}
                ]
            )

        } catch (error) {
            console.log(error)
        }
    }
    
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
        try {
            const response = await axios.get('https://trocapaginas-server.onrender.com/publications')
            const posts = response.data
    
            console.log(posts[0])
            setPublications(posts)
            setPageIsLoading(false)
        }catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <View style={styles.container}> 
                <StatusBar barStyle={'light-content'} />

                { user && <TopMenu/> }

                <FlatList
                    contentContainerStyle = {styles.viewPublications}
                    data={publications}
                    renderItem={({ item }) => <Publication publication={item} />}
                    keyExtractor={(item) => item.id_post}
                    refreshing={loading}
                    onRefresh={getPublications}
                />
                <BottomMenu/>
            </View>  

            {pageIsLoading  && <AppLoader />}
        </>
    )
}