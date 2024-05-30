import { StatusBar, View, FlatList, BackHandler} from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from "@react-navigation/native"

import axios from 'axios'
import { useUserStore } from '../../store/badgeStore'

import TopMenu from '../../components/Menus/TopMenu'
import Publication from '../../components/Publication'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './style'
import React from 'react'

export default function InitialPage(props) {
    const [ publications, setPublications ] = useState([])
    const [loading, setLoading] = useState(false)

    //const user = useUserStore(state => state.data);
    const saveUser = useUserStore(state => state.save);

    const navigation = useNavigation();
    const getUser = async() => {
        try {
            const response = await axios.get('https://trocapaginas-server-production.up.railway.app/login/success')
            
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

    
    useEffect(()=> {
        // user.logout()

        if(props.route.params?.page) {
            getUser();
        }

        getPublications()
    }, []);

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
        const response = await axios.get('http://192.168.1.65:6005/publications')
        const posts = response.data

        setPublications(posts)
    }

    return (
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
    )
}